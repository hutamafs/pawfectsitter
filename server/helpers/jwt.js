const jwt = require('jsonwebtoken');

function genToken(payload) {
    return jwt.sign(payload, 'hutama');
};

function vefToken(token) {
    return jwt.verify(token, 'hutama');
};

module.exports = {genToken,vefToken};