const Validator = require('validatorjs');
const validator = async (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};


const addCar = async (req, res, next) => {
    const validationRule = {
        "CarName": "required|string",
        "Price": "required|integer",
        "Model": "required|string",
        "YearManufacture": "required|integer",
        "FuelType": "string"
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
        addCar
    }
}