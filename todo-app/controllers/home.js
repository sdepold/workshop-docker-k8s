const { Router } = require("express");
const controller = Router();

const TasksView = require("../views/tasks/index");

controller.get("/", (req, res) => {
  const html = TasksView([]);

  res.send(html);
});

module.exports = controller;
