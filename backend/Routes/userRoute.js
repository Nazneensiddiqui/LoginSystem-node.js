const express=require("express");
const route=express.Router();
const UserControler=require("../controlers/userControler")
 
route.post("/ragestation",UserControler.DataSave)


module.exports=route;