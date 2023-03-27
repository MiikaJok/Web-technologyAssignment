'use strict';
const catModel = require('../models/catModel');

const getCatList = async (req, res) => {
    try {
        let cats = await catModel.getAllCats();
        // convert ISO date to date only
         cats = cats.map(cat => {
            cat.birthdate = cat.birthdate.toISOString().split('T')[0];
            return cat;
        });
        res.json(cats);
    } catch (error) {
        res.status(500).json({error: 500, message: error.message});
    }

};
const postCat = async (req, res) => {
    console.log("posting a cat ", req.body, req.file);
    try {

    // add cat details to cats array
    const newCat = req.body;
    newCat.filename = req.file.filename;
    const result = await catModel.insertCat(newCat);
    //send correct response if upload is successful
    res.status(201).json("New cat added!");
    } catch (error) {
        res.status(400).json({error: 500, message: error.message})
    }
};

const modifyCat = async (req, res) => {
    console.log("modifying a cat ", req.body);
    const cat = req.body;
    try {
        const result = await catModel.modifyCat(cat);
        //send correct response if upload is successful
        res.status(201).json({message: "Cat modified!"});
    } catch (error) {
        res.status(400).json({error: 500, message: error.message})
    }
};

const deleteCat = async (req, res) => {
    console.log("deleting a cat ", req.params.id)
    try {
    const result = await catModel.deleteCat(req.params.id);
    //send correct response if upload is successful
    res.status(200).json("Cat deleted");
    } catch (error) {
        res.status(400).json({error: 500, message: error.message})
    }
};

const getCat = async (req, res) => {
    // convert id value to number
    const catId = Number(req.params.id);
    // check if number is not an integer
    if (!Number.isInteger(catId)) {
        res.status(400).json({error: 500, message: 'invalid id'});
        return;
    }
    try {

    const [cat] = await catModel.getCatById(catId);
    console.log('getcat', cat);
    res.json(cat);
    } catch (error){
        res.status(400).json({error: 500, message: error.message})
    }
};

const catController = {getCatList, getCat, postCat, modifyCat, deleteCat};
module.exports = catController;