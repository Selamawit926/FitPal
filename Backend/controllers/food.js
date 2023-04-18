

const Food = require('../models/food');

exports.getFood = (req, res) => {
    Food
        .find()
        .then((food) => {
            return res.status(200).json(food);
        })
        .catch((err) => {
            return res.json(
                { message: err.message }
            );
        });
}
exports.getFoodById = (req, res) => {                
    Food
        .findById(req.params.id)
        .then((food) => {
            return res.status(200).json(food);
        })
        .catch((err) => {
            return res.json(
                { message: err.message }
            );
        });
}
exports.addFood = (req, res) => {               
    new Food({
        name: req.body.name,
        image: req.body.image,
        calories: req.body.calories,
    })
        .save()
        .then((food) => {
            return res.status(201).json({
                body: food,
                message: `Added food successfully`
            });
        })
        .catch((err) => {
            res.json({
                message: err.message
            });
        });
}