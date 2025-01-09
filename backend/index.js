const express=require("express");
const app=express();

require("dotenv").config();
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")

const UserRouter=require("./Routes/userRoute")
const port=process.env.PORT;
const dbcon=process.env.DBCON;

mongoose.connect(dbcon).then((res)=>{
    console.log("DB Connected")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/users", UserRouter)

app.listen(port , ()=>{
    console.log(`Server run on ${port}`)
})
