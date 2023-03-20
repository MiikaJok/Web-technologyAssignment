'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const getCatList = (req, res) => {
    res.json(cats);
};

const createCat = (req, res) => {
    const createCat = req.params.cats;
    res.json(createCat)
};

const modifyCat = (req, res) => {
    const modifyCat = req.params.cats;
    res.json(modifyCat)
};

const deleteCat = (req, res) => {
    const deleteCat = req.params.cats;
    res.json(deleteCat)
};

const getCat = (req, res) => {

    const id = req.params.catId;
    const filteredCats = cats.filter(cat => id === cat.id);
    console.log(filteredCats);
    const cat = filteredCats[0];
    if (filteredCats.length > 0) {
        res.json(filteredCats[0]);
    } else {
        res.status(404).send("Cat not found");
    }
    // TODO: filter matching cat based on id
    // TODO: send response 404 if id not found in array(res.status(404))
    /*const cat = cats.find( cat => cat.id === id);
        if(!cat){
            res.status(404).json({message: "Cat not found"});
            return

        }
        res.json(cat)
     */
};

const catController = {getCatList, getCat, createCat, modifyCat, deleteCat};
module.exports = catController;