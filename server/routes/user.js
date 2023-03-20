const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

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
  console.log("Searching for id");
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("user").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new user.
userRoutes.route("/user/add").post(function (req, response) {
  console.log("Add method running");
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("user").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a user by id.
userRoutes.route("/user/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      status: req.body.status,
    },
  };
  db_connect
    .collection("user")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log(`${res.modifiedCount} user was updated.`);
      response.json(res);
    });
});

// This section will help you delete a user
userRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 user deleted");
    response.json(obj);
  });
});

module.exports = userRoutes;

module.exports = userRoutes;