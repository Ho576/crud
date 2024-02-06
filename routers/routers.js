const express = require('express');
const app = express();

const userRouter = require('./../src/modules/user/user.js');
const blogRouter = require('./../src/modules/blog/blog.js');

app.use(express.json());

app.use(userRouter);
app.use(blogRouter);

module.exports =app;