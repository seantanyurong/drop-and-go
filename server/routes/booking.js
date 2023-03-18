const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const bookingRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

bookingRoutes.route("/booking").get(function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  db_connect
    .collection("booking")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new listing.
bookingRoutes.route("/booking/add").post(function (req, response) {
  console.log("Add method running");
  let db_connect = dbo.getDb();
  let myobj = {
    listing: req.body.listing,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    days: req.body.days,
    paynow: req.body.paynow,
    bags: req.body.bags,
    status: req.body.active,
  };
  db_connect.collection("booking").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you get a single listing by id
bookingRoutes.route("/booking/:id").get(function (req, res) {
  console.log("Searching for id");
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("booking").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = bookingRoutes;
