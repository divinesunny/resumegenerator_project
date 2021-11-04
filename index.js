const express=require('express');
const app=express();
const User=require('./models/user.model');
const mongoose=require('mongoose');
const fileupload=require('express-fileupload')

/* const router = require('express').Router();
const cloudinary=require('./utils/cloudinary');
const upload=require('./utils/multer'); */

const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(fileupload());
mongoose.connect('mongodb+srv://chethan:sheryl20@cluster0.ztjot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
   console.log('connected established')
})

app.post('/app/register',async (req,res)=>{
   try{
      const user=await User.create({
         email:req.body.email,
         password:req.body.pass,
         phno:req.body.phno
      })
      console.log(user);
      res.json({
         status:'ok'
      })
   }
   catch(er){
      console.log(er);
      res.json({
         status:'error'
      })
   }
  
})
app.post('/app/login',async(req,res)=>{
      const user=await User.findOne({
         email:req.body.email,
         password:req.body.pass,
         phno:req.body.phno
      })
   if(user){
      return res.json({status:'ok',user:true})
   }  
   else
   {
      return res.json({status:'error',user:false})
   }
})

/* app.post('/user',upload.single('image'),async(req,res)=>{
   try{
      console.log(req.file)
      const result=await cloudinary.uploader.upload(req.file.path);
      res.json(result);
   }
   catch(ex){
      console.log(ex)
   }
}) */

app.listen(3002,()=>{
   console.log('server satrted @3002')
})