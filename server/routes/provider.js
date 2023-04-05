const express = require("express");

// providerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /provider.
const providerRoutes = express.Router();

// This will help us connect to the database.
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This help with the login authentication of provider
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


/* Provider Login Methods */

// This section will help you to verify if a provider is logged in
providerRoutes.route("/provider/authenticate").get(function (req, res) {
  console.log("Verifying JWT");
  const token = req.headers["x-access-token"]?.split(' ')[1];
  console.log(token);

  if (token) {
    console.log("Authenticating Token");
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err)
        return res.json({
          isLoggedIn: false,
          message: "Failed To Authenticate Provider",
        });
      console.log(decoded.id);
      return res.json({ isLoggedIn: true, id: decoded.id});
    });
  } else {
    console.log("Incorrect Token Auth");
    res.json({ message: "Incorrect Token Provided", isLoggedIn: false });
  }
});

// This section will help you to allow provider to login
providerRoutes.route("/provider/login").post(async function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  const providerLogin = req.body;
  const providerDB = await db_connect
    .collection("provider")
    .findOne({ email: providerLogin.email });

  console.log(providerDB.password);
  console.log(providerLogin.email);

  if (!providerDB) {
    return res.json({ message: "Invalid Email Address!" });
  }

  bcrypt.compare(providerLogin.password, providerDB.password).then((isCorrect) => {
    if (isCorrect) {
      console.log("Passwords Equal");
      const payload = {
        id: providerDB._id,
        name: providerDB.name,
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 86400 },
        (err, token) => {
          if (err) return res.json({ message: err });
          
          console.log("JWT Signing");
          
          return res.json({
            message: "Success",
            token: "Bearer " + token,
          });
        }
      );
    } else {
      console.log("Passwords Not Equal");
      return res.json({ message: "Invalid Email or Password!" });
    }
  });
});


/* Provider CRUD Methods */

// This section will help you create a new provider.
providerRoutes.route("/provider/add").post(async function (req, res) {
  console.log("Add method running");
  let db_connect = dbo.getDb("dropandgo");
  const provider = req.body;
  console.log(provider.name);

  // checks if username or email have been taken by another provider
  const takenUsername = await db_connect
    .collection("provider")
    .findOne({ name: provider.name });
  const takenEmail = await db_connect
    .collection("provider")
    .findOne({ email: provider.email });

  console.log(takenUsername);
  console.log(takenEmail);

  // checks if password matches reenterPassword
  const pw = provider.password;
  const repw = provider.reenterPassword;

  if (takenUsername || takenEmail) {
    console.log("Username/Email Taken!");
    res.json({ message: "Username or Email has already been taken!" });
  } else if (pw !== repw) {
    console.log("Password Not Equals!");

    res.json({ message: "Password does not match re-entered Password!" });
  } else {
    encryptedPassword = await bcrypt.hash(req.body.password, 10);
    console.log("Trying Create Provider");

    let myobj = {
      name: provider.name,
      email: provider.email,
      password: encryptedPassword,
      phone: provider.phone,
      bankAccount: provider.bank,
      joinDate: provider.joinDate,
      status: "active",
    };

    db_connect.collection("provider").insertOne(myobj, function (err, response) {
      console.log("Creating Provider");
      if (err) throw err;
      res.json(response);
    });
  }
});

// This section will help you update a provider by id.
providerRoutes.route("/provider/update/:id").post(async function (req, response) {
  let db_connect = dbo.getDb("dropandgo");

  const providerDB = await db_connect
    .collection("provider")
    .findOne({ _id: ObjectId(req.params.id) });
  
  let encryptedPassword = "";
  if (!req.body.password) {
    encryptedPassword = providerDB.password;
  } else if (providerDB.password !== req.body.password) {
    console.log("Updating Password");
    encryptedPassword = await bcrypt.hash(req.body.password, 10);
  } else {
    encryptedPassword = req.body.password;
  }

  let updatedBankAcc = "";
  if (!req.body.bankAccount) {
    updatedBankAcc = providerDB.bankAccount;
  } else {
    updatedBankAcc = req.body.bankAccount;
  }

  let updatedStatus = "";
  if (!req.body.status) {
    updatedStatus = providerDB.status;
  } else {
    updatedStatus = req.body.status;
  }

  let newvalues = {
    $set: {
      name: req.body.name,
      email: req.body.email,
      password: encryptedPassword,
      phone: req.body.phone,
      bankAccount: updatedBankAcc,
      status: updatedStatus,
    },
  };
  let myquery = { _id: ObjectId(req.params.id) };

  db_connect
    .collection("provider")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("Provider Was Updated");
      response.json(res);
    });
});

// This section will help you delete a provider
providerRoutes.route("/provider/delete/:id").delete((req, response) => {
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("provider").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("Provider Was Deleted");
    response.json(obj);
  });
});

// This section will help you get a list of all the providers.
providerRoutes.route("/provider").get(function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  db_connect
    .collection("provider")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single provider by id
providerRoutes.route("/provider/:id").get(function (req, res) {
  console.log("Searching for id");
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("provider").findOne(myquery, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

module.exports = providerRoutes;
