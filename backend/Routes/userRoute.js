const express=require("express");
const route=express.Router();
const UserControler=require("../controlers/userControler")
 
route.post("/ragestation",UserControler.DataSave)
route.post("/userlogin" , UserControler.UserLogin)


module.exports=route;