
const User = require("../models/user");
const JoinedChallenges = require("../models/joined_challenges");
const Challenge = require("./challenge");
const caloriesBurnt = require("calories-burnt");

exports.getUsers = (req, res, next) => {
    User
        .find()
        .then((users) => {
            return res.status(200).json({
                data:{users}
            });
        })
        .catch((err) => {
            return res.json(
                { message: err.message }
            );
        });
}

exports.getUserById = (req, res) => {
    User
        .findById(req.params.id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    message: `User not found.`
                });
            }
            return res.status(200).json({

                data:{user}
            
            });
        })
        .catch((err) => {
            return res.json(
                { message: err.message }
            );
        });
}
exports.addUser = (req, res) => {
    new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        dateOfBirth: req.body.dateOfBirth,
        description: req.body.description,
        image: req.body.image,
        weight: req.body.weight,
        height: req.body.height,
        location: req.body.location,
    })
        .save()
        .then((user) => {
            return res.status(201).json({
                body: user,
                message: `User successfully added.`
            });
        })
        .catch((err) => {
            res.json({
                message: err.message
            });
        });
}

exports.deleteUser = (req, res) => {
    User
        .findByIdAndDelete(req.params.id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    message: `User not found.`
                });
            }
            return res.status(200).json({
                body: user,
                message: `User successfully deleted.`
            });
        })
        .catch((err) => {
            res.json({
                message: err.message
            }
            );
        });
}

exports.updateUser = function (req, res) {
    User
        .findByIdAndUpdate(req.params.id, req.body)
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    message: `User not found.`
                });
            }
            return res.status(200).json({
                body: user,
                message: `User successfully updated.`
            });
        }
        )
        .catch((err) => {
            res.json({
                message: err.message
            });
        }
        );
}

exports.activeChallenge =  (req, res) => {
    JoinedChallenges
        .find({
            userID: req.params.id,
            isActive: true
        })
        .then(async (joinedChallenges) => {
            if (!joinedChallenges) {
                return res.status(404).json({
                    message: `Challenge not found.`
                });
            }
            const challenge = await Challenge.findById(joinedChallenges.challengeID);
            return await res.status(200).json({
                data: {challenge}
            });
        })
}

exports.completedChallenge =  (req, res) => {
    JoinedChallenges
        .find({
            userID: req.params.id,
            isActive: false
        })
        .then(async (joinedChallenges) => {
            if (!joinedChallenges) {
                return res.status(404).json({
                    message: `Challenge not found.`
                });
            }
            const challenge = await Challenge.findById(joinedChallenges.challengeID);
            return await res.status(200).json({
                data: {challenge}
            });
        })
}

exports.calculateCalories = (req,res)=>{
    userID = req.body.userID;
    challengeID = req.body.challengeID;
    const user = User.findById(userID);
    const exerciseName = req.body.exerciseName;
    const durationInMinutes = req.body.durationInMinutes;
    const intensityLevel = req.body.intensityLevel;
    const userWeightInPounds = user.weight;

    const caloriesBurned =  caloriesBurnt(exerciseName, durationInMinutes, intensityLevel, userWeightInPounds);

    JoinedChallenges
        .findOneAndUpdate({
            userID:userID,
            challengeID: challengeID
            },
            {
                calories_burnt : caloriesBurned
            }
        ).then((challenge) => {
            if (!challenge) {
                return res.status(404).send({
                    message: `Couldn't update challenge`
                });
            }
            else {
                return res.status(200).send(challenge);
            }
    
        }).catch((err) => {
            return res.status(500).send({
                message: `Error updating `
            })
        })
        
}
    