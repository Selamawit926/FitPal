const express = require("express");
const router = express.Router();

const { addChallenge,
        getChallenges,
        getJoinedChallenges,
        updateChallenge,
        deleteChallenge} = require("../controllers/challenge");

router.post("/addChallenge", addChallenge);
router.get("/getChallenge/:id", getChallenges);
router.get("/getJoinedChallenge/:id",getJoinedChallenges);
router.put("/updateChallenge/:id",updateChallenge);
router.delete("/deleteChallenge/:id",deleteChallenge);

module.exports = router;