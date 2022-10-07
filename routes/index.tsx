const express2 = require('express');
const router2 = express2.Router();

router2.use('/', require('./swagger.tsx'));
router2.use('/realtors',require('./realtors.tsx'));
router2.use('/homes',require('./homes.tsx'));


module.exports = router2;