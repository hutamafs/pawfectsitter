const { Keeper } = require("../models/keeper.model");

class KeeperController {    

    static async getAllKeepers(req,res,next) {
        try {
            let keepers = await Keeper.find({});
            res.status(200).json(keepers);
        } catch (next) {
            
        }
    }

    static async createKeeper(req,res,next) {
        try {

           const {name,email,image,price,rating,skills,status,address} = req.body;
           const newObj = {name,email,image,price,rating:Number(rating),skills,status,address};

           let keeper = new Keeper(newObj);
           await keeper.save();
           res.status(201).json(keeper);

        } catch (error) {
            next(error)
        }
    }

}

module.exports = KeeperController