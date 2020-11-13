const {User} = require('../models/UserModel');
const { vefToken } = require('../helpers/jwt');

async function authentication (req,res,next) {
    try {
        let decode = vefToken(req.headers.access_token);
        let user = await User.findOne({email:decode.email});

        if(!user) throw ({msg:'authentication failed',code:401});
        req.userData = decode;
        next();

    } catch (error) {
        next(error)
    }
}

module.exports = authentication;