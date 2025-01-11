const userModel = require("../Models/userModel")
const bcrypt=require("bcrypt")

//....Ragestation.....................
const DataSave=async(req , res)=>{
   console.log(req.body)
const{name,city,email,password}=req.body

//bcrypt google se lana he
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
//.................UserLogin...................................................................................
const UserLogin=async(req , res)=>{
    const{email , password}=req.body;

    try {
        const User=await userModel.findOne({email:email});
        console.log(User);
         if(!User)
        {
    res.status(400).send({msg:"Invalid email"})
        }
const checkpass= await bcrypt.compare(password , User.password);
if(checkpass)
{
    res. status(200).send({msg:"Valid Password"})
}
else{
    res.status(400).send({msg:"InValid Password"})
}

    } catch (error ){
        res.send("error in code")
    }
}

module.exports={
    DataSave,
    UserLogin

}