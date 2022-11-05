const {validateBody} = require("../middleware/validate")

const solution = (req, res) =>  {
    const {error} = validateBody(req.body)
        if(error){
            return res.status(404).json({
                data:error.message,
                msg: "Bad Request"
            })
        }
        const {operation_type, x, y} = req.body
        let result = 0
        if(operation_type === "addition"){
            result = x + y
        }
        if(operation_type === "subtraction"){
            result = x - y
        }
        if(operation_type === "multiplication"){
            result = x * y
        }

        res.status(200).json({slackUsername: "Klynton", result: result, operation_type: operation_type})
}

module.exports = {solution}