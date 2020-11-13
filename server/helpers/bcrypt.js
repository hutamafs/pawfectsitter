const bcrypt = require('bcryptjs');

function hashPass(pass) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(pass, salt);
}

function vefPass (pass,hashed) {
    return bcrypt.compareSync(pass,hashed);
}

module.exports = {hashPass,vefPass};