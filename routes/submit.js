const path = require("path");
const express = require("express");
const checkLogin = require("../database/queries/check-login");
const router = express.Router();
const orderQueue = require("../database/queries/order-queue");

router.post("/add-new", async (req, res, next) => {
  console.log(req.body);
  await orderQueue(req.body);
});

module.exports = router;
