const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const bookingRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the bookings.
bookingRoutes.route("/booking").get(function (req, res) {
  console.log("Booking: Getting all bookings");
  let db_connect = dbo.getDb("dropandgo");
  db_connect
    .collection("booking")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single booking by id
bookingRoutes.route("/booking/:id").get(function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  console.log("Booking: Searching for id");
  console.log(req.params.id);
  console.log(ObjectId(req.params.id));
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("booking").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// The order matters. This won't ever trigger cause of above ID.
// This section will help you get a list of all the bookings belonging to a user
bookingRoutes.route("/booking/:userId").get(function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { user_id: req.params.userId };
  db_connect
    .collection("booking")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new booking.
bookingRoutes.route("/booking/add").post(function (req, response) {
  console.log("Add method running");
  let db_connect = dbo.getDb();
  let myobj = {
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    days: req.body.days,
    paynow: req.body.paynow,
    bags: req.body.bags,
    status: req.body.active,
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
    listing_id: req.body.listing_id,
    user_id: req.body.user_id,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
  };
  db_connect.collection("booking").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a booking by id.
bookingRoutes.route("/booking/update/:id").post(function (req, response) {
  console.log("Booking: Updating");
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { _id: ObjectId(req.params.id) };

  console.log(req.body.status);
  let newvalues = {
    $set: {
      status: req.body.status,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    },
  };
  db_connect
    .collection("booking")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a booking
bookingRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("booking").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = bookingRoutes;
