const AnswerServices = require("../services/anwers.services")

const getAnwersAll =  async(req,res,next)=>{
    try {
        const answer = await AnswerServices.answerAll()
        res.json(answer)
    } catch (error) {
        next(error)
    }
}

const createAnswer = async(req, res, next)=>{
    try {
        const newAnswer = req.body
        const answer =  await AnswerServices.create(newAnswer)
        res.status(201).json(answer)
    } catch (error) {
        next(error)
    }
}

const editAnswer = async(req, res, next)=>{
    try {
        const {id} = req.params
        const  data =  req.body
        const result =  await AnswerServices.update(id, data)
        res.status(204).send()
        
    } catch (error) {
        next(error)
    }
}

const deleteAnswer = async(req, res, next)=>{
    try {
        const {id} = req.params
        const result =  await AnswerServices.delete(id)
        res.status(204).send()
        
    } catch (error) {
       next(error)
    }
}

module.exports = {
    createAnswer,
    editAnswer,
    getAnwersAll,
    deleteAnswer
}