const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const listingRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the listings.
listingRoutes.route("/listing").get(function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  db_connect
    .collection("listing")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single listing by name
listingRoutes.route("/listing/name/:name").post(function (req, res) {
  console.log("Searching for name");
  let db_connect = dbo.getDb("dropandgo");
  let myquery = { name: String(req.params.name) };
  db_connect.collection("listing").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you get a single listing by id
listingRoutes.route("/listing/:id").get(function (req, res) {

  let db_connect = dbo.getDb("dropandgo");
  console.log("Listing: Searching for id");

  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("listing").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new listing.
listingRoutes.route("/listing/add").post(function (req, response) {
  console.log("Add method running");
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.shopName,
    capacity: req.body.capacity,
    address: req.body.address,
    about: req.body.about,
    openingHours: req.body.openingHours,
    postal: req.body.postal,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    pricePerDay: req.body.pricePerDay,
    pricePerHour: req.body.pricePerHour,
    dateListed: req.body.dateListed,
    review_ids: req.body.review_ids,
    provider_id: req.body.provider_id,
    booking_ids: req.body.booking_ids,
    displayPicture: req.body.displayPicture,
  };
  db_connect.collection("listing").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a listing by id.
listingRoutes.route("/listing/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.shopName,
      capacity: req.body.capacity,
      address: req.body.address,
      about: req.body.about,
      openingHours: req.body.openingHours,
      postal: req.body.postal,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      pricePerDay: req.body.pricePerDay,
      pricePerHour: req.body.pricePerHour,
      dateListed: req.body.dateListed,
      review_ids: req.body.review_ids,
      provider_id: req.body.provider_id,
      booking_ids: req.body.booking_ids,
      displayPicture: req.body.displayPicture,
    },
  };
  db_connect
    .collection("listing")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a listing
listingRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("listing").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = listingRoutes;
