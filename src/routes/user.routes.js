const { Router } = require("express");
const { createUser, editUser, getUserAll, deleteUser } = require("../controllers/user.controller");
const { craeteUserValidator, editUserValidator } = require("../validators/user.validators");
/*const Category = require("../models/categories.model");
const Post = require("../models/post.model");
const User = require("../models/user.model");*/

const router = Router()

router.get('/api/v1/user/', getUserAll)

router.post('/api/v1/user', craeteUserValidator, createUser)

router.put('/api/v1/user/:id', editUserValidator, editUser)

router.delete('/api/v1/user/:id', deleteUser)


/*
router.get('/api/v1/user/:id/posts', async (req, res) => {

    try {
        const { id } = req.params
        const userPosts = await User.findByPk(id, {
            attributes:['username'],
            include:{
                model:Post,
                attributes:['title'],
                include:{
                    model:Category,
                    attributes:['name']
                }
            }
        }
            )
        res.json(userPosts)

    } catch (error) {
        res.status(400).json(error)
    }
})
*/
module.exports = router