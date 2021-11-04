const mongoose=require('mongoose');

const User=new mongoose.Schema({
   email:{type:String,required:true},
   password:{type:String,required:true},
   phno:{type:String,require:true}
},
{
   collection:'user-data'
}
)

const model=mongoose.model('UserData',User);

module.exports=model