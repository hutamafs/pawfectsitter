const {User} = require('../models/UserModel');
const jwt = require('jsonwebtoken');

async function authentication (req,res,next) {
    try {
        let decode = await jwt.verify(req.headers.access_token,process.env.SECRET);
        let user = await User.findOne({email:decode.email});

        if(!user) throw ({msg:'authentication failed',code:401});
        req.userData = decode;
        next();

    } catch (error) {
        next(error)
    }
}

module.exports = authentication;