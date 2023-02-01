const { response } = require("express");
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

require("../db/index");

// Iteration #1
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    Drone.create(drones).then((resp) => {
      //mongoose.connection.close();
      mongoose.disconnect();
    });
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
