const express = require('express');
const router = express.Router();

const home_Controller = require('../controllers/homes');

router.get('/:id', home_Controller.getSingle);
router.get('/', home_Controller.getAll);
router.post('/', home_Controller.createHome);
router.put('/:id', home_Controller.updateHome);
router.delete('/:id', home_Controller.deleteHome);

module.exports = router;