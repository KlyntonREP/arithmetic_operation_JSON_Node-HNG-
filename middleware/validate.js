const Joi = require('joi');

function validateBody(body) {
    let schema = Joi.object({
        operator: Joi.string().required(),
        x: Joi.number().required(),
        y: Joi.number().required(),
    })
    return schema.validate(body)
}

module.exports = {validateBody}