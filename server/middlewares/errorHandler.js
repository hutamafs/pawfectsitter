function errorHandler(err,req,res,next) {
    let errors = [];
    let code = 500;
    
    switch(err._message) {
        case 'User validation failed':

        case 'Pet validation failed':

        case 'Keeper validation failed':

            for (key in err.errors) {
                errors.push(err.errors[key].properties.message);
            }
            code = 400;
        break;
        default:
            errors.push(err.msg || 'internal server error');
            code = err.code || 500;
            break;
    }
    
    res.status(code).json({errors})
}

module.exports = errorHandler;