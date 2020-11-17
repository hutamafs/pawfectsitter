const { Pet } = require("../models/pet.model");
const Order = require('../models/OrderModel');
const { Keeper } = require("../models/keeper.model");

class OrderController {

    static async getAllOrders(req,res,next) {
        try {
            let orders = await Order.find({user_id: req.userData.id});
            res.status(200).json(orders);
        } catch (next) {
        }
    }

    static async createOrder(req,res,next) {
        try {
            let keeper = await Keeper.findById(req.params.id);
            await keeper.update({status:'unavailable'})
            await keeper.save();
            let pet = await Pet.findById(req.body.pet_id);
            let order = new Order({
                user_id:req.userData.id,
                quantity:req.body.quantity,
                price:req.body.price,
                keeperName : keeper.name,
                petName : pet.name,
                petImage : pet.image,
                keeperImage:keeper.image,
                status:true
            })
            await order.save();
            res.status(201).json(order)
        } catch (next) {
        }
    }

    static async finishOrder(req,res,next) {
        try {
            console.log('masuk')
            let order = await Order.findOne({_id:req.params.id});
            console.log(order,'ini order line 40')
            order.status = false;
            await order.save();
            console.log(order,'ini order line 43')
            //let order = await Order.findOneAndUpdate(req.params.id,false,{new:true});
            res.status(200).json(order);

        } catch (error) {
            next(error)
        }
    }
}

module.exports = OrderController;