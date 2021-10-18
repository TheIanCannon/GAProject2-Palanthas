const express = require('express');
const router = express.Router();
const shelvesCtrl = require('../controllers/shelves');

router.get('/', shelvesCtrl.index);
router.post('/', shelvesCtrl.create);
router.delete('/:id', shelvesCtrl.delete);

module.exports = router;