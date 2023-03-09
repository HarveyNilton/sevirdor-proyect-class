const Answer = require("../models/answer.model")


class AnswerServices {

    static async answerAll(){
        try {
            const result = await Answer.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async create(newAnswer) {
        try {
            const result = await Answer.create(newAnswer)
            return result
        } catch (error) {
            throw error
        }
    }

    static async update(id, data) {
        try {
            const result = await Answer.update(data,{
                where:{id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async delete(id) {
        try {
            const result = await Answer.destroy({
                where:{id}
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = AnswerServices