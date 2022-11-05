const Joi = require('joi');

function validateBody(body) {
    let schema = Joi.object({
        operator: Joi.string().required(),
        firstNum: Joi.number().required(),
        secondNum: Joi.number().required(),
    })
    return schema.validate(body)
}

module.exports = {validateBody}