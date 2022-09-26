const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/realtors',require('./realtors'));


module.exports = router;