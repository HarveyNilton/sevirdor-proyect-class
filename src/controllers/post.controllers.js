
const PostsServices = require("../services/post.services")

const getPostsAll = async (req, res, next) => {
    try {
        const { categoryId, offset, limit } = req.query

        const posts = await PostsServices.postsAll(categoryId, offset, limit)
        const { count, rows } = posts

        const url = 'localhost:7000/api/v1/posts'

        const newOffset = (isNext) => {
            if (isNext) return Number(offset) + Number(limit);

            return Number(offset) - Number(limit);
        };

        const nextPage =
            newOffset(true) >= count ? null : `${url}?offset=${newOffset(true)}&limit=${Number(limit)}`;

        const previousPage =
            Number(offset) > 0 ? `${url}?offset=${newOffset(false)}&limit=${Number(limit)}` : null;


        const response = {
            count,
            next: nextPage,
            previous: previousPage,
            posts: rows
        }
        res.json(!Number(limit) && !Number(offset) ? response.posts : response)
    } catch (error) {
        next(error)

    }
}

const createPost = async (req, res, next) => {
    try {

        const newPost = req.body
        const post = await PostsServices.create(newPost)
        res.status(201).json(post)
    } catch (error) {
        next(error)

    }
}

const editPosts = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = req.body
        const result = await PostsServices.update(id, data)
        res.status(204).send()

    } catch (error) {
        next(error)

    }
}


const getPostWithAnswers = async (req, res, next) => {
    try {
        const { postId } = req.params
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