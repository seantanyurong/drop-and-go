const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const reviewRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the reviews.
reviewRoutes.route("/review").get(function (req, res) {
  console.log("review: Getting all reviews");
  let db_connect = dbo.getDb("dropandgo");
  db_connect
    .collection("review")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get review by booking id 
reviewRoutes.route("/review/booking/:bookingId").get(function (req, res) {
    console.log("Review: BookingId")
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { booking_id: req.params.bookingId };
  db_connect.collection("review").findOne(myquery, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

reviewRoutes.route("/review/listings/:listingId").get(function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  let myquery = [
    {
      $match:
        {
          listing_id: req.params.listingId,
        },
    },
    {
      $group:
        {
          _id: null,
          totalStars: {
            $sum: "$starNumber",
          },
          numReviews: {
            $sum: 1,
          },
        },
    },
    {
      $addFields:
        {
          reviewScore: {
            $divide: ["$totalStars", "$numReviews"],
          },
        },
    },
  ];
  db_connect
    .collection("review")
    .aggregate(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single review by id
reviewRoutes.route("/review/:id").get(function (req, res) {
  console.log("Booking: Searching for id");
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("review").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new review
reviewRoutes.route("/review/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    starNumber: req.body.starNumber,
    subject: req.body.subject,
    description: req.body.description,
    dateReviewed: new Date(),
    user_id: req.body.userId,
    listing_id: req.body.listingId,
    booking_id: req.body.bookingId,
  };
  db_connect.collection("review").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = reviewRoutes;
