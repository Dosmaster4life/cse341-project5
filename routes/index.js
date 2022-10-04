const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/realtors',require('./realtors'));
router.use('/homes',require('./homes'));


module.exports = router;