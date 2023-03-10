const CategoryServices = require("../services/category.services");

const getCategoryAll = async(req,res,next) => {
    try {
        const categories = await CategoryServices.getAll();
        res.json(categories)
    } catch (error) {
        next(error)
    }
}

const createCategory = async(req,res,next) => {
    try {
        const newCategory = req.body
        const category =  await CategoryServices.create(newCategory);
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
}

const editCategory = async(req,res,next) => {
    try {
        const {id} = req.params
        const data =  req.body
        const  result=  await CategoryServices.update(data, id);
        res.status(204).send()
    } catch (error) {
        next(error);
    }
}

const deleteCategory = async(req,res,next) => {
    try {
        const {id} = req.params
        const result=  await CategoryServices.delete(id);
        res.status(204).send()
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCategory,
    getCategoryAll,
    editCategory,
    deleteCategory
}