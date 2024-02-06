//Users
const express = require('express');
const app = express();
const userController = require('./user.controller.js');
const {getAllUsers,addUser,deleteUser,updateUser} = userController;

app.get('/users',getAllUsers );

app.post('/addUser',addUser );  

app.delete('/deleteUser',deleteUser);

app.patch('/updateUser',updateUser);

module.exports = app;