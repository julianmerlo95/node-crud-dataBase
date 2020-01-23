const express = require("express");
const route = express.Router();
const controllerUser = require("../controller/controller.user.js");
//Midlleware
route.use(express.json());

route.get("/", controllerUser.getUser);
route.get("/:id", controllerUser.getUserId);
route.post("/", controllerUser.postUser);
route.put("/:id", controllerUser.putUser);
route.delete("/:id", controllerUser.deleteUser);

module.exports = route;
