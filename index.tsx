const express8 = require('express');
const router5 = express8.Router();



router5.use('/', require('./swagger'));
router5.use('/realtors',require('./realtors'));



module.exports = router5;