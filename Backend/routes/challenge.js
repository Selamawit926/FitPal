const express = require("express");

const router = express.Router();

const { addChallenge,
        getChallenges,
        getJoinedChallenges,
        updateChallenge,
        deleteChallenge
    
    } = require("../controllers/challenge");



router.post("/", addChallenge);
router.get("/:id", getChallenges);
router.get("/getJoinedChallenge/:id",getJoinedChallenges);
router.put("/:id",updateChallenge);
router.delete("/:id",deleteChallenge);



module.exports = router;