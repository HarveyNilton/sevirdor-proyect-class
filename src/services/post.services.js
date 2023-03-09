const Post = require("../models/post.model");
const Answer = require("../models/answer.model")
const Categories = require("../models/categories.model")
const User = require("../models/user.model")

class PostsServices {

    static async postsAll() {
        try {
            const result = await Post.findAll({
                attributes: { exclude: ['category_id', 'user_id'] },
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    },
                    {
                        model: Categories,
                        attributes: ['name']
                    }
                ]
            })
            return result
        } catch (error) {
            throw error
        }

    }

    static async create(newPost) {
        try {
            const result = await Post.create(newPost)
            return result
        } catch (error) {
            throw error
        }
    }

    static async update(id, data) {
        try {
            const result = await Post.update(data, {
                where: { id }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async postWithAnswer(postId) {
        try {
            const result = await Post.findByPk(postId, {
                attributes:{exclude:['category_id','user_id']},
                include: [
                    {
                        model: User,
                        /*as:"hh",*/
                         attributes:['username']
                    },
                    {
                        model: Answer,
                        attributes:['content'],
                        include: {
                            model: User,
                            attributes:['username']
                        }
                    },
                    {
                        model: Categories,
                         attributes:['name']
                    },

                ]
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = PostsServices