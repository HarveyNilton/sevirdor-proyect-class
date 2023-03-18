const PostsServices = require("../services/post.services")

const getPostsAll = async(req,res,next)=>{
    try {
        const {categoryId} = req.query
        const posts = await PostsServices.postsAll(categoryId)
        res.json(posts)
    } catch (error) {
        next(error)

    }
}

const createPost =  async(req, res,next)=>{
    try { 

        const newPost = req.body
        const post = await PostsServices.create(newPost)
        res.status(201).json(post)
    } catch (error) {
        next(error)

    }
}

const editPosts =  async(req, res, next)=>{
    try {
        const {id} = req.params
        const data = req.body
        const result = await PostsServices.update(id,data)
        res.status(204).send()

    } catch (error) {
        next(error)

    }
}


const getPostWithAnswers = async(req,res,next)=>{
    try {
        const {postId} = req.params
        const postWithAnswer = await PostsServices.postWithAnswer(postId)
        res.json(postWithAnswer)
    } catch (error) {
        next(error)

    }
}

module.exports = {
    getPostsAll,
    createPost,
    editPosts,
    getPostWithAnswers,
}