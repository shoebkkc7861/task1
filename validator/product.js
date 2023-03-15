const Validator = require('validatorjs');
const validator = async (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};


const addProduct = async (req, res, next) => {
    const validationRule = {
        "productName": "required|string",
        "price": "required|integer",
        "description": "required|string",
        "imgPath": "string",
        "createdBy": "required|integer",
        "updatedBy": "integer"
    };
    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}

module.exports = {
    validation: {
        addProduct
    }
}