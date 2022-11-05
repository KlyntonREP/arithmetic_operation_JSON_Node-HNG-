const {validateBody} = require("../middleware/validate")

const solution = (req, res) =>  {
    const {error} = validateBody(req.body)
        if(error){
            return res.status(404).json({
                data:error.message,
                msg: "Bad Request"
            })
        }
        const {operator, firstNum, secondNum} = req.body
        let result = 0
        if(operator === "+" || operator === "add"){
            result = firstNum + secondNum
        }
        if(operator === "-" || operator === "subtract"){
            result = firstNum - secondNum
        }
        if(operator === "*" || operator === "multiply"){
            result = firstNum * secondNum
        }
        if(operator === "/" || operator === "divide"){
            result = firstNum / secondNum
        }

        res.status(200).json({slackName: "Klynton", result: result, operator: operator})
}

module.exports = {solution}