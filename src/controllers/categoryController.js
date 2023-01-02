const categoryModel = require("../models/category");

const getAllCategories = async (req,res) => {
    try{
        const categories = await categoryModel.find();
        res.status(200).json({data:categories});
    }catch(error){
        res.status(500).json({message: error});
    }
}

const addCategory = async (req,res) => {
    let name = req.body.name;
    if(!name){
        return res.status(400).json({message:"Category name is required"});
    }
    try{
        let category = await categoryModel.create({name:name});
        res.status(200).json({data:category});
    }catch(error){
        res.status(500).json({message: error});
    }
}

const updateCategory = async (req,res) => {
    let id = req.params.id;
    if(!id){
        return res.status(400).json({message: "Category id is required."});
    }
    let newCategory ={id:id,name:req.body.name};
    try{
        await categoryModel.findByIdAndUpdate(id,newCategory,{new:true});
        res.status(200).json(newCategory);
    }catch(error){
        res.status(500).json({message: error});
    }
}

const deleteCategory = async (req,res) => {
    let id = req.params.id;
    if(!id){
        return res.status(400).json({message: "Category id is required."});
    }
    try{
        let category = await categoryModel.findByIdAndRemove(id);
        res.status(200).json({data:category});
    }catch(error){
        res.status(500).json({message: error});
    }
}

module.exports = {getAllCategories,addCategory,deleteCategory,updateCategory};