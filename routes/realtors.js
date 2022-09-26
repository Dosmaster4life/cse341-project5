const express = require('express');
const router = express.Router();

const realtor_Controller = require('../controllers/realtors');

router.get('/:id', realtor_Controller.getSingle);
router.get('/', realtor_Controller.getAll);
router.post('/', realtor_Controller.createRealtor);
router.put('/:id', realtor_Controller.updateRealtor);
router.delete('/:id', realtor_Controller.deleteRealtor);

module.exports = router;