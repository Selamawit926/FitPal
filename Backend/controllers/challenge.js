

const Challenge = require("../models/challenge");
const joinedChallenges = require("../models/joined_challenges");

exports.addChallenge = (req, res) => {
    new Challenge({
        title: req.body.title,
        userID: req.params.id,
        duration: req.body.duration,
        exercise_id: req.body.exercise_id,
        exercise_name: req.body.exercise_name,
        intensity: req.body.intensity,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        image: req.body.image,
        completedUsers: req.body.completedUsers,
        description: req.body.description
    })
        .save()
        .then((challenge) => {
            return res.status(201).json({
                body: challenge,
                message: `Added challenge successfully`
            });
        })
        .catch((err) => {
            res.json({
                message: err.message
            });
        });
}

exports.getChallenges = (req,res) => {
    Challenge
        .findById(req.params.id)
        .then((challenges) => {
            return res.status(200).json({
                data: {challenges}
            });
        })
        .catch((err) => {
            return res.json(
                { message: err.message }
            );
        });
}

exports.getJoinedChallenges = (req,res) => {
    joinedChallenges
        .findById(req.params.id)
        .then((challenges)=>{
            return res.status(200).json({
                data:{challenges}
            });
        })
        .catch((err) => {
            return res.json(
                { message: err.message }
            );
        });
}

exports.deleteChallenge = (req, res) => {
    Challenge
        .findByIdAndDelete(req.params.id)
        .then((challenge) => {
            return res.status(200).json({
                body: challenge,
                message: `Deleted challenge successfully`
            });
        })
        .catch((err) => {
            res.json({
                message: err.message
            }
            );
        });
}

exports.updateChallenge = function (req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    Challenge.findOneAndUpdate(
        {
            _id:req.params.id
        },

        req.body,
        { new: true },

    ).then((challenge) => {
        if (!challenge) {
            return res.status(404).send({
                message: `Couldn't update challenge with id ${req.params.id}`
            });
        }
        else {
            return res.status(200).send(challenge);
        }

    }).catch((err) => {
        return res.status(500).send({
            message: `Error updating ${req.params.id}`
        })
    })
}
