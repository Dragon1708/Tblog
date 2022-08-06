import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';

import {loginValidator, registerValidator, articleCreateValidator } from "./validation/validations.js";
import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController.js";
import * as ArticleController from "./controllers/ArticleController.js";

mongoose.connect(
    'mongodb+srv://Winso:123098456@cluster0.hkpingz.mongodb.net/Tblog?retryWrites=true&w=majority'
).then(()=>{ console.log("Mongo Okey")})

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Ti daun") 
})


app.get('/auth/me',checkAuth, UserController.getMe)

app.post('/auth/register', registerValidator, UserController.register)

app.post('/auth/login',loginValidator, UserController.login)

 app.get('/article', ArticleController.getAll)
 app.get('/article/:id', ArticleController.getOne)
 app.post('/article',checkAuth, articleCreateValidator, ArticleController.create)
 app.delete('/article/:id',checkAuth, ArticleController.remove)
 app.patch('/article/:id',checkAuth, ArticleController.update)

app.listen(4444, (err) => {
if (err) {
    return console.error(err)
}
console.log("Vso Zaebis")
})