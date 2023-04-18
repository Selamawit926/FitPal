const express = require("express");

const router = express.Router();



const { addFood, getFood, getFoodById } = require("../controllers/food");


router.post("/", addFood);
router.get("/", getFood);
router.get("/:id", getFoodById);

module.exports = router;