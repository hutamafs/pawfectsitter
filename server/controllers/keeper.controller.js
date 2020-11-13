const mongoose = require("mongoose");
const { Keeper } = require("../models/keeper.model");

module.exports.getAllKeepers = async (req, res) => {
    let keepers = await Keeper.find({});
    return res.status(200).json(keepers);
};

module.exports.createKeeper = async (req, res) => {
    console.log(req.body);
    let keeper = new Keeper({
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
        rating: req.body.rating,
        skills: req.body.skills,
        status: req.body.status,
        address: req.body.address
    });
    await keeper.save();
    return res.send(keeper);
};