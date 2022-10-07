const express7 = require('express');
const router = express7.Router();

const realtors_Controller = require('../controllers/realtors.tsx');

router.get('/:id', realtors_Controller.getSingle);
router.get('/', realtors_Controller.getAll);
router.post('/', realtors_Controller.createRealtor);
router.put('/:id', realtors_Controller.updateRealtor);
router.delete('/:id', realtors_Controller.deleteRealtor);

module.exports = router;