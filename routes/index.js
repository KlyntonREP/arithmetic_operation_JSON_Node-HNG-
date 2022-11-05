const express = require('express');

const {solution} = require('../controller/index');

router = express.Router();

router.post('/result', solution)

module.exports = router;