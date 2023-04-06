const express = require("express");

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const userRoutes = express.Router();

// This will help us connect to the database.
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This help with the login authentication of user
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/* User Login Methods */

// This section will help you to verify if a user is logged in
userRoutes.route("/user/authenticate").get(function (req, res) {
  console.log("Verifying JWT");
  const token = req.headers["x-access-token"]?.split(' ')[1];
  console.log(token);

  if (token) {
    console.log("Authenticating Token");
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err)
        return res.json({ 
          isLoggedIn: false, 
          message: "Failed To Authenticate User",
        });
      console.log(decoded.id);
      return res.json({ isLoggedIn: true, id: decoded.id, name: decoded.name });
    });
  } else {
    console.log("Incorrect Token Auth");
    res.json({ message: "Incorrect Token Provided", isLoggedIn: false });
  }
});

// This section will help you to allow user to login
userRoutes.route("/user/login").post(async function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  const userLogin = req.body;
  const userDB = await db_connect
    .collection("user")
    .findOne({ email: userLogin.email });

  console.log(userDB.password);
  console.log(userLogin.email);

  if (!userDB) {
    return res.json({ message: "Invalid Email Address!" });
  }

  bcrypt.compare(userLogin.password, userDB.password).then((isCorrect) => {
    if (isCorrect) {
      console.log("Passwords Equal");
      const payload = {
        id: userDB._id,
        name: userDB.name,
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


/* User CRUD Methods */

// This section will help you create a new user.
userRoutes.route("/user/add").post(async function (req, res) {
  console.log("Add method running");
  let db_connect = dbo.getDb("dropandgo");
  const user = req.body;
  console.log(user.name);

  // checks if username or email have been taken by another user
  const takenUsername = await db_connect
    .collection("user")
    .findOne({ name: user.name });
  const takenEmail = await db_connect
    .collection("user")
    .findOne({ email: user.email });

  console.log(takenUsername);
  console.log(takenEmail);

  // checks if password matches reenterPassword
  const pw = user.password;
  const repw = user.reenterPassword;

  if (takenUsername || takenEmail) {
    console.log("Username/Email Taken!");
    res.json({ message: "Username or Email has already been taken!" });
  } else if (pw !== repw) {
    console.log("Password Not Equals!");

    res.json({ message: "Password does not match re-entered Password!" });
  } else {
    encryptedPassword = await bcrypt.hash(req.body.password, 10);
    console.log("Trying Create User");

    let myobj = {
      name: user.name,
      email: user.email,
      password: encryptedPassword,
      phone: user.phone,
      joinDate: user.joinDate,
      status: "active",
    };

    db_connect.collection("user").insertOne(myobj, function (err, response) {
      console.log("Creating User");
      if (err) throw err;
      res.json(response);
    });
  }
});

// This section will help you update a user by id.
userRoutes.route("/user/update/:id").post(async function (req, response) {
  let db_connect = dbo.getDb("dropandgo");

  const userDB = await db_connect
    .collection("user")
    .findOne({ _id: ObjectId(req.params.id) });

  let encryptedPassword = "";
  if (!req.body.password) {
    encryptedPassword = userDB.password;
  } else if (userDB.password !== req.body.password) {
    console.log("Updating Password");
    encryptedPassword = await bcrypt.hash(req.body.password, 10);
  } else {
    encryptedPassword = req.body.password;
  }

  let updatedStatus = "";
  if (!req.body.status) {
    updatedStatus = userDB.status;
  } else {
    updatedStatus = req.body.status;
  }

  let newvalues = {
    $set: {
      name: req.body.name,
      email: req.body.email,
      password: encryptedPassword,
      phone: req.body.phone,
      status: updatedStatus,
    },
  };
  let myquery = { _id: ObjectId(req.params.id) };

  db_connect
    .collection("user")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log(`${res.modifiedCount} User Was Updated.`);
      response.json(res);
    });
});

// This section will help you delete a user
userRoutes.route("user/delete/:id").delete((req, response) => {
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("user").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("User Was Deleted");
    response.json(obj);
  });
});

// This section will help you get a list of all the users.
userRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  db_connect
    .collection("user")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single user by id
userRoutes.route("/user/:id").get(function (req, res) {
  console.log("User: Searching for id");
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("user").findOne(myquery, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

module.exports = userRoutes;
