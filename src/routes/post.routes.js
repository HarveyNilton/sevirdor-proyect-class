const { Router } = require("express");
const { createPost, getPostsAll, editPosts, getPostWithAnswers } = require("../controllers/post.controllers");


const router = Router()

router.get('/api/v1/posts', getPostsAll)

router.post('/api/v1/posts', createPost)

router.put('/api/v1/posts/:id', editPosts)


router.get('/api/v1/posts/:postId/answers', getPostWithAnswers)

module.exports =  router
