//Blogs 
const express = require('express');
const app = express();

const blogController = require('./blog.controller.js')
const {getAllBlogs,getUserBlogs,addBlog,deleteBlog,updateBlog} = blogController;

app.get('/blogs',getAllBlogs );

app.get('/userBlogs',getUserBlogs );

app.post('/addBlog',addBlog );

app.delete('/deleteBlog/:BlogId/:user_name',deleteBlog);

app.patch('/updateBlog/:BlogId/:user_name',updateBlog);

module.exports = app;


