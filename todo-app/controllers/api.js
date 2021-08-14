const { Router } = require("express");
const controller = Router();
const fetch = require("node-fetch");
const API_BASE_PATH = "http://localhost:5000";

controller.all("/api/:path", handleRequest);
controller.all("/api/:path/:subPath", handleRequest);

function handleRequest(req, res) {
  const body = ["GET", "HEAD", "DELETE"].includes(req.method)
    ? undefined
    : JSON.stringify(req.body);

  fetch(`${API_BASE_PATH}/${req.path.replace("/api/", "")}`, {
    method: req.method,
    body,
    headers: req.headers,
  }).then(async (_res) => {
    if (_res.ok) {
      if (!["DELETE", "PATCH"].includes(req.method)) {
        return _res.json().then((data) => res.status(_res.status).json(data));
      }
    }

    res.sendStatus(_res.status);
  });
}

module.exports = controller;
