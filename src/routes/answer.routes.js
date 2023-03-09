const { Router } = require("express");
const { createAnswer, editAnswer, getAnwersAll, deleteAnswer } = require("../controllers/answer.controller");


const router =  Router()

router.get('/api/v1/answers', getAnwersAll)

router.post('/api/v1/answers', createAnswer)

router.put('/api/v1/answers/:id', editAnswer)

router.delete('/api/v1/answers/:id', deleteAnswer)

module.exports =  router