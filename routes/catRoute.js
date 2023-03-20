'use strict';
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
module.exports = router;

router.get('/', catController.getCatList);
router.get('/:catId', catController.getCat);
router.post('/', catController.postCat);
router.put('/', catController.modifyCat);
router.delete('/', catController.deleteCat);