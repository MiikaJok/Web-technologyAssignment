'use strict';
const express = require('express');
const multer = require('multer');
const router = express.Router();
const catController = require('../controllers/catController');

const upload = multer({dest: 'uploads/'});

//root of cat endpoint (http://localhost:300/cat)
router.route('/')
    .get(catController.getCatList)
    .post(upload.single('cat'), catController.postCat)
    .put(catController.modifyCat)

// All cat/:id endpoints
router.route('/:id')
    .get(catController.getCat)
    .delete(catController.deleteCat)

module.exports = router;