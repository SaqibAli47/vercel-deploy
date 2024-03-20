const express = require('express');
const userRouter = express.Router();
const userController = require('../Controller/users');
userRouter.post('/users',userController.createUser)
.get('/users', userController.getAllusers)
.get('/users/:id', userController.getUser)
.put('/users/:id', userController.replaceUser)
.patch('/users/:id', userController.updateUser)
.delete('/users/:id', userController.deleteUser)
exports.userRouter = userRouter;