//const express = require('express');
const router5 = express.Router();



router5.use('/', require('./swagger'));
router5.use('/realtors',require('./realtors'));
router5.use('/auth',require('./auth'));



module.exports = router5;