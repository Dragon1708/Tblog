import express from 'express';
import jwb from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import {validationResult} from 'express-validator';

import { registerValidator } from "./validation/auth.js";
import UserModel from "./models/User.js";

mongoose.connect(
    'mongodb+srv://Winso:123098456@cluster0.hkpingz.mongodb.net/Tblog?retryWrites=true&w=majority'
).then(()=>{ console.log("Mongo Okey")})

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Ti daun") 
})

app.post('/auth/register', registerValidator, async (req, res) => {
 try {
    const errors=validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }
  
    const salt=await bcrypt.genSalt(10)
    const passwordHash=await bcrypt.hash(req.body.password,salt )
  
  const doc=new UserModel({
      login: req.body.login,
      email: req.body.email,
      passwordHash,
      avatarUrl: req.body.avatarUrl,
  })
  
  const user= await doc.save()
  
const token = jwb.sign({
    _id: user._id,
}, 'SecretUser')

    res.json({...user._doc,
        token
    })
 } catch (error) {
    console.error( error)
    res.status(500).json({
        message: "Register Error :((",
       
    })
 }
})


app.post('/auth/login', async (req, res) => {
try {
    const user = await UserModel.findOne({email: req.body.email})

    if (!user) {
return res.status(404).json({
    message: "User not Found X)"
})
}

const isValidPassword = await bcrypt.compare(req.body.password, user._doc.passwordHash)
   if (!isValidPassword) {
    return res.status(404).json({
        message: "Password NoValid 0_0" //Zamenit vezde na "Nevernii login or Parol"
    })
   }

   const token = jwb.sign({
    _id: user._id,
}, 'SecretUser')

const {passwordHash, ...userData}=user._doc // delete password hash

res.json({...userData,
    token
})
} catch (error) {
    console.error(error)
    res.status(500).json({
        message: "Ne udalos Login ^(("
    })   
}
})

app.listen(4444, (err) => {
if (err) {
    return console.error(err)
}
console.log("Vso Zaebis")
})