'use strict';
const catModel = require('../models/catModel');

const getCatList = async (req, res) => {
    try {
        const cats = await catModel.getAllCats();
        // console.log(cats);
        res.json(cats);
    } catch (error) {
        res.status(500).json({error: 500, message: error.message});
    }

};

const postCat = async (req, res) => {
    console.log("posting a cat ", req.body, req.file);
    // add cat details to cats array
    const newCat = req.body;
    newCat.filename = req.file.filename;
    // TODO: add try~catch
    const result = await catModel.insertCat(newCat);
    //send correct response if upload is successful
    res.status(201).send("New cat added!");
};

const modifyCat = async (req, res) => {
    console.log("modifying a cat ", req.body);
    // TODO: add try~catch
    const cat = req.body;
    const result = await catModel.modifyCat(req.body);
    //send correct response if upload is successful
    res.status(200).send("Cat modified!");
};

const deleteCat = async (req, res) => {
    console.log("deleting a cat ", req.params.catId);
    // TODO: add try~catch
    const cat = req.body;
    const result = await catModel.deleteCat(req.params.catId);
    //send correct response if upload is successful
    res.status(200).send("Cat deleted");
};

const getCat = async (req, res) => {
    // convert id value to number
    const catId = Number(req.params.catId);
    // check if number is not an integer
    if (!Number.isInteger(catId)) {
        res.status(400).json({error: 500, message: 'invalid id'});
        return;
    }
    // TODO: wrap to try~catch
    const [cat] = await catModel.getCatById(catId);
    console.log('getcat', cat);
    if (cat) {
        res.json(cat);
    } else {
        // send 404 status message if not in array
        res.status(404).json({message: "Cat not found"});
    }
};

const catController = {getCatList, getCat, postCat, modifyCat, deleteCat};
module.exports = catController;