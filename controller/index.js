const {validateBody} = require("../middleware/validate")

const solution = (req, res) =>  {
    const {error} = validateBody(req.body)
        if(error){
            return res.status(404).json({
                data:error.message,
                msg: "Bad Request"
            })
        }
        const {operator, x, y} = req.body
        let result = 0
        if(operator === "+" || operator === "add"){
            result = x + y
        }
        if(operator === "-" || operator === "subtract"){
            result = x - y
        }
        if(operator === "*" || operator === "multiply"){
            result = x * y
        }
        if(operator === "/" || operator === "divide"){
            result = x / y
        }

        res.status(200).json({slackName: "Klynton", result: result, operator: operator})
}

module.exports = {solution}