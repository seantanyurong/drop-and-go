const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const businessHoursRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the businessHourss.
businessHoursRoutes.route("/businessHours").get(function (req, res) {
    let db_connect = dbo.getDb("dropandgo");
    db_connect
        .collection("businessHours")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you update a businessHours by id.
businessHoursRoutes.route("/businessHours/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            // name: req.body.name,
            monOpeningHours: req.body.monOpeningHours,
            monClosingHours: req.body.monClosingHours,
            tueOpeningHours: req.body.tueOpeningHours,
            tueClosingHours: req.body.tueClosingHours,
            wedOpeningHours: req.body.wedOpeningHours,
            wedClosingHours: req.body.wedClosingHours,
            thurOpeningHours: req.body.thurOpeningHours,
            thurClosingHours: req.body.thurClosingHours,
            friOpeningHours: req.body.friOpeningHours,
            friClosingHours: req.body.friClosingHours,
            satOpeningHours: req.body.satOpeningHours,
            satClosingHours: req.body.satClosingHours,
            sunOpeningHours: req.body.sunOpeningHours,
            sunClosingHours: req.body.sunClosingHours,
        },
    };
    db_connect
        .collection("businessHours")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});

// This section will help you get a single businessHours by id
businessHoursRoutes.route("/businessHours/:id").get(function (req, res) {
    console.log("Searching for id");
    let db_connect = dbo.getDb("dropandgo");
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("businessHours").findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// This section will help you create a new businessHours.
businessHoursRoutes.route("/businessHours/add").post(function (req, response) {
    console.log("Add method running");
    let db_connect = dbo.getDb();
    let myobj = {
        $set: {
            // name: req.body.name,
            monOpeningHours: req.body.monOpeningHours,
            monClosingHours: req.body.monClosingHours,
            tueOpeningHours: req.body.tueOpeningHours,
            tueClosingHours: req.body.tueClosingHours,
            wedOpeningHours: req.body.wedOpeningHours,
            wedClosingHours: req.body.wedClosingHours,
            thurOpeningHours: req.body.thurOpeningHours,
            thurClosingHours: req.body.thurClosingHours,
            friOpeningHours: req.body.friOpeningHours,
            friClosingHours: req.body.friClosingHours,
            satOpeningHours: req.body.satOpeningHours,
            satClosingHours: req.body.satClosingHours,
            sunOpeningHours: req.body.sunOpeningHours,
            sunClosingHours: req.body.sunClosingHours,
        },
    };
    db_connect.collection("businessHours").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});



// This section will help you delete a businessHours
businessHoursRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("businessHours").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = businessHoursRoutes;
