const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//Get All Post
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get a single post by ID
router.get('/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) {
            return res.status(404).json({message: "Post not found"})
        }
        res.json(post)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Create a new post
router.post('/', async(req,res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author,
        image: req.body.image
    })

    try {
        const newPost = await post.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})