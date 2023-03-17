const { Router } = require("express");
const { createPost, getPostsAll, editPosts, getPostWithAnswers } = require("../controllers/post.controllers");
const autentificate = require("../middlewares/auth.middleware");


const router = Router()

router.get('/api/v1/posts',autentificate, getPostsAll)

router.post('/api/v1/posts',autentificate, createPost)

router.put('/api/v1/posts/:id',autentificate, editPosts)


router.get('/api/v1/posts/:postId/answers',autentificate, getPostWithAnswers)

module.exports =  router
