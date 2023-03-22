'use strict';
const catModel = require('../models/catModel');

const getCatList = async (req, res) => {
    const cats = await catModel.getAllCats();
    res.json(cats);
};

const postCat = (req, res) => {
    console.log("posting a cat ", req.body, req.file);
    // add cat details to cats array
    const newCat = req.body;
    newCat.filename='http://localhost:3000/' + req.file.path;
    cats.push(newCat);
    //send correct response if upload is successful
    res.status(201).send("New cat added!");
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

const catController = {getCatList, getCat, postCat, modifyCat, deleteCat};
module.exports = catController;