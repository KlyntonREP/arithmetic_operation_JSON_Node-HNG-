const Joi = require('joi');

function validateBody(body) {
    let schema = Joi.object({
        operation_: Joi.string().required(),
        x: Joi.number().required(),
        y: Joi.number().required(),
    })
    return schema.validate(body)
}

module.exports = {validateBody}