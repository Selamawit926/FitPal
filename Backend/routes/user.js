const express = require("express");

const router = express.Router();

const { addUser, getUsers, getUserById, updateUser, deleteUser, activeChallenge, completedChallenge } = require("../controllers/user");

router.post("/", addUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/getActiveChallenge/:id",activeChallenge);
router.get("/getcompletedChallenge/:id",completedChallenge);


module.exports = router;