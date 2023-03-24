const express = require("express");

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

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
userRoutes.route("/user/add").post(function (req, res) {
  console.log("Add method running");
  let db_connect = dbo.getDb();
  console.log(req);
  const user = req.body;

  // checks if username or email have been taken by another user
  const takenUsername = db_connect.collection("user").findOne({ name: user.name });
  const takenEmail = db_connect.collection("user").findOne({ email: user.email });

  // checks if password matches reenterPassword
  const pw = user.password;
  const repw = user.reenterPassword;

  if (takenUsername || takenEmail) {
    res.json({ message: "Username or Email has already been taken!" });
  } else if (!pw.equals(repw)) {
    res.json({ message: "Password does not match re-entered Password!" });
  } else {
    // user.password = await bcrypt.hash(req.body.password, 10);

    let myobj = {
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      joinDate: user.joinDate,
      status: "active",
    };

    db_connect.collection("user").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  }
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
  db_connect.collection("user").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 user deleted");
    response.json(obj);
  });
});

// User Login 

/*
userRoutes.route("/user/getEmail").get(verifyJWT, function (req, res) {
  res.json({isLoggedIn: true, email: req.user.email})
})
*/

/*
userRoutes.route("/login/user").post(function (req, res) {
  let db_connect = dbo.getDb("dropandgo");
  const userLogin = req.body;
  const userDB = db_connect.collection("user").findOne({ email: userLogin.email });

  if (!userDB) {
    return res.json({ message: "Invalid Email Address!" })
  }

  bcrypt.compare(userLogin.password, userDB.password)
    .then(isCorrect => {
      if (isCorrect) {
        const payload = {
          id: userDB._id,
          name: userDB.name,
        }
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 86400 },
          (err, token) => {
            if (err) return res.json({ message: err })
            return res.json({
              message: "Success",
              token: "Bearer " + token
            })
          }
        )
      } else {
        return res.json({ message: "Invalid Email or Password!" })
      }
    })
});
*/

/*
function verifyJWT(req, res, next) {
  const token = req.header["x-access-token"]?.split(' ')[1]

  if (token) {
    jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
      if (err) return res.json({
        isLoggedIn: false,
        message: "Failed to authenticate user"
      })
      req.user = {};
      req.user.id = decoded.id
      req.user.email = decoded.email
      next()
    })
  } else {
    res.json({ message: "Incorrect Token Provided", isLoggedIn: false})
  }
}*/

module.exports = userRoutes;
