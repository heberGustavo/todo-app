const express = require("express");
const bodyParser = require("body-parser");

module.exports = function (server) {
  // API Routes
  const router = express.Router();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use("/api", router);

  // TODO Routes
  const todoService = require("../api/todo/todoService");
  todoService.register(router, "/todos");
};
