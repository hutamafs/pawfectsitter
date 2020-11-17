const User = require('../models/UserModel');
const {hashPass, vefPass} = require('../helpers/bcrypt.js');
const jwt = require('jsonwebtoken');

class UserController {

    static async register(req,res,next) {
        console.log(req.body)
        try {
            const {name,email,password,address} = req.body;
            const newObj = {name,email,password: await hashPass(password),address};
            let user = new User(newObj);
            await user.save();
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                address:user.address,
            })
        } catch (error) {
            next(error)
        }
    }

    static async login(req,res,next) {
        try {
            const {email,password} = req.body;
            let user = await User.findOne({email});
            // console.log(req.body);
            if(!user) throw ({msg: 'invalid email or password',code:400});
            let comparison = vefPass(password,user.password);
            if(!comparison) throw ({msg: 'invalid email or password',code:400});
            // console.log(comparison);
            let payload = {
                id:user._id,
                email:user.email
            }
            //let access_token = await genToken(payload);
            let access_token = await jwt.sign(payload,process.env.SECRET);
            // console.log(access_token);
            res.status(200).json({access_token});
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;