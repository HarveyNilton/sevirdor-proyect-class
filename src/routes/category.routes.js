const { Router } = require("express");
const { createCategory, editCategory, getCategoryAll, deleteCategory } = require("../controllers/category.controller");


const categoryRouter = new Router()

categoryRouter.get('/api/v1/category', getCategoryAll)

categoryRouter.post('/api/v1/categoty', createCategory)

categoryRouter.put('/api/v1/category/:id', editCategory)

categoryRouter.delete('/api/v1/category/:id', deleteCategory)


module.exports = categoryRouter