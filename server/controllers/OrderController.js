const { Pet } = require("../models/pet.model");
const Order = require('../models/OrderModel');
const { Keeper } = require("../models/keeper.model");
const User = require('../models/UserModel');

const moment = require('moment');

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
                keeperId:req.params.id,
                status:true,
                timeCreated:moment(new Date()).format('h:mm:ss a'),
                dateCreated:moment(new Date()).format('DD MMM')
            })
            await order.save();
            res.status(201).json(order)
        } catch (next) {
        }
    }

    static async finishOrder(req,res,next) {
        try {
            const {review} = req.body
            let order = await Order.findOne({_id:req.params.id});
            let keeper = await Keeper.findById(order.keeperId);
            let user = await User.findById(req.userData.id)
            order.timeFinished = moment(new Date()).format('h:mm:ss a')
            order.dateFinished = moment(new Date()).format('DD MMM')
            order.status = false;
           
            let obj = {
                user: user.name,
                msg: review,
                timeCreated:order.dateFinished
            }
            keeper.status = 'available';
            await keeper.review.push(obj)
            await keeper.save();
            await order.save();
            //let order = await Order.findOneAndUpdate(req.params.id,false,{new:true});
            res.status(200).json(order);

        } catch (error) {
            next(error)
        }
    }
}

module.exports = OrderController;