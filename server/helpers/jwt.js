const jwt = require('jsonwebtoken');

function genToken(payload) {
    return jwt.sign(payload, process.env.SECRET);
};

function vefToken(token) {
    return jwt.verify(token, process.env.SECRET);
};

module.exports = {genToken,vefToken};