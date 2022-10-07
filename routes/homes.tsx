const express4 = require('express');
const router4 = express4.Router();

const home_Controller = require('../controllers/homes.tsx');

router4.get('/:id', home_Controller.getSingleI);
router4.get('/', home_Controller.getAllI);
router4.post('/', home_Controller.createHome);
router4.put('/:id', home_Controller.updateHome);
router4.delete('/:id', home_Controller.deleteHome);

module.exports = router4;