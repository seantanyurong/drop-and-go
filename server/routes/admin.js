const express = require("express");

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /admin.
const adminRoutes = express.Router();

// This will help us connect to the database.
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


/* Admin CRUD Methods */

// This section will help you get a list of all the admins
adminRoutes.route("/admin").get(function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  db_connect
    .collection("admin")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single admin by id
adminRoutes.route("/admin/:id").get(function (req, res) {
  console.log("Searching for id");
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("admin").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new admin.
adminRoutes.route("/admin/add").post(async function (req, res) {
  console.log("Add method running");
  let db_connect = dbo.getDb("dropandgo");
  const admin = req.body;
  console.log(admin.name);

  // checks if username or email have been taken by another user
  const takenUsername = await db_connect
    .collection("admin")
    .findOne({ name: admin.name });
  const takenEmail = await db_connect
    .collection("admin")
    .findOne({ email: admin.email });

  console.log(takenUsername);
  console.log(takenEmail);

  // checks if password matches reenterPassword
  const pw = admin.password;
  const repw = admin.reenterPassword;

  if (takenUsername || takenEmail) {
    console.log("Username/Email Taken!");
    res.json({ message: "Username or Email has already been taken!" });
  } else if (pw !== repw) {
    console.log("Password Not Equals!");

    res.json({ message: "Password does not match re-entered Password!" });
  } else {
    // admin.password = await bcrypt.hash(req.body.password, 10);
    console.log("Trying Create User");

    let myobj = {
      name: admin.name,
      email: admin.email,
      password: admin.password,
    };

    db_connect.collection("admin").insertOne(myobj, function (err, response) {
      console.log("Creating Admin");
      if (err) throw err;
      response.json(res);
    });
  }
});

// This section will help you update a listing by id.
adminRoutes.route("/admin/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  };
  db_connect
    .collection("admin")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("Admin Was Updated");
      response.json(res);
    });
});

// This section will help you delete a listing
adminRoutes.route("/admin/delete/:id").delete((req, response) => {
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("admin").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("Admin Was Deleted");
    response.json(obj);
  });
});

/* User Login Methods */

// This section will help you to allow admin to login
adminRoutes.route("/admin/login").post(async function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  const adminLogin = req.body;
  const adminDB = await db_connect
    .collection("admin")
    .findOne({ email: adminLogin.email });

  console.log(adminDB.password);
  console.log(adminLogin.email);

  if (!adminDB) {
    return res.json({ message: "Invalid Email Address!" });
  }

  if (adminLogin.password === adminDB.password) {
    console.log("Equal");
    const payload = {
      id: adminDB._id,
      name: adminDB.name,
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 86400 },
      (err, token) => {
        if (err) return res.json({ message: err });
        return res.json({
          message: "Success",
          token: "Bearer " + token,
        });
      }
    );
  } else {
    console.log("Not Equal");
    return res.json({ message: "Invalid Email or Password!" });
  }
});

module.exports = adminRoutes;
