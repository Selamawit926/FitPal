const express = require("express");
const router = express.Router();

const { addChallenge,
        getChallenges,
        getJoinedChallenges,
        updateChallenge,
        deleteChallenge
    
    } = require("../controllers/challenge");

const { addFood, getFood, getFoodById } = require("../controllers/food");

router.post("/addChallenge", addChallenge);
router.get("/getChallenge/:id", getChallenges);
router.get("/getJoinedChallenge/:id",getJoinedChallenges);
router.put("/updateChallenge/:id",updateChallenge);
router.delete("/deleteChallenge/:id",deleteChallenge);

router.post("/addFood", addFood);
router.get("/getFood", getFood);
router.get("/getFoodById/:id", getFoodById);

module.exports = router;