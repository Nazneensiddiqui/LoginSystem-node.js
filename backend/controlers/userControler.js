const userModel = require("../Models/userModel")
const bcrypt=require("bcrypt")

const DataSave=async(req , res)=>{
   console.log(req.body)
const{name,city,email,password}=req.body

const salt = await bcrypt.genSalt();
const passwordHash = await bcrypt.hash(password, salt);

const mydata= await userModel.create({
    name:name, 
    city:city,
    email:email,
    password:passwordHash
    
})
res.send("ok")
}


module.exports={
    DataSave

}