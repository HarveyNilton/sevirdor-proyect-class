const Category = require("../models/categories.model");


class CategoryServices {
   
    static async create(newCategory){
        try {
            const result = await Category.create(newCategory);
            return result;
        } catch (error) {
            throw error
        
        }
    }
    static async getAll(){
        try {
            const result = await Category.findAll();
            return result;
        } catch (error) {
            throw error
        
        }
    }

    static async update(data,id){
        try {
            const result = await Category.update(data,{where:{id}});
            return result;
        } catch (error) {
            throw error
        
        }
    }

    static async delete(id){
        try {
            const result = await Category.destroy({where:{id}});
            return result;
        } catch (error) {
            throw error
        
        }
    }
}

module.exports = CategoryServices;