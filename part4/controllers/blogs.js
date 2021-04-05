const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({})
  res.json(blogs)
})

blogsRouter.post('/', (req, res, next) => {
  const body = req.body

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.author,
    likes: body.likes | 0
  })

  blog
    .save()
    .then((savedBlog) => res.status(201).json(savedBlog))
    .catch((err) => next(err))
})

module.exports = blogsRouter
