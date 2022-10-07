const express7 = require('express');
const router5 = express7.Router();



router5.use('/', require('./swagger'));
router5.use('/realtors',require('./realtors'));



module.exports = router5;