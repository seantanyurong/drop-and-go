const express = require("express");
const adminRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
// const { adminLogin } = require("../../clientv2/src/components/layout/LoginPage/AdminLogin")

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
    db_connect
        .collection("admin")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new admin.
adminRoutes.route("/admin/add").post(function (req, response) {
    console.log("Add method running");
    let db_connect = dbo.getDb("dropandgo");
    let myobj = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    db_connect
        .collection("admin")
        .insertOne(myobj, function (err, res) {
            if (err) throw err;
            response.json(res);
        });
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
            console.log("admin updated");
            response.json(res);
        });
});

// This section will help you delete a listing
adminRoutes.route("/admin/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb("dropandgo");
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("admin")
        .deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log("admin deleted");
            response.json(obj);
        });
});

// Admin Login (WIP)
adminRoutes.route("/login/admin").post(function (req, res) {
    let db_connect = dbo.getDb("dropandgo");
    let email = req.body.email;
    let password = req.body.password;
    db_connect
        .collection("admin")
        .findOne(email, function (err, result) {
            if (result.password == password) {
                res.redirect("/admin/dashboard");
            } else {
                throw err;
            }
        });
});

module.exports = adminRoutes;

module.exports = adminRoutes;