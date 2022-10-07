const express3 = require('express');
const router3 = express3.Router();

const realtor_Controller = require('../controllers/realtors.tsx');

router3.get('/:id', realtor_Controller.getSingle);
router3.get('/', realtor_Controller.getAll);
router3.post('/', realtor_Controller.createRealtor);
router3.put('/:id', realtor_Controller.updateRealtor);
router3.delete('/:id', realtor_Controller.deleteRealtor);

module.exports = router3;