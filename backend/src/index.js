const express = require("express");
const body_parse=require('body-parser')
const app=express()
const mongoose=require("mongoose");
const  route  = require("./route/route");
const cors=require("cors")


app.use(body_parse.json())
app.use(cors())
mongoose.set("strictQuery", false)
mongoose
  .connect(
    "mongodb+srv://shubham108h:LOhyTHS7kcSijNsz@cluster0.ovhwygy.mongodb.net/shubham108h",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/",route)

app.listen(3001,(()=>{
  console.log("server is running 3001 port")
}))
