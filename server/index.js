const express =require("express")
const cors=require("cors")
const bodyParser=require('bodyparser')
const dotenv=require('dotenv')
const mongoose =require('mongoose')

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const PORT=process.env.PORT || 7000
const URL =process.env.MONOURL

mongoose.connect(URL).then(()=>{
    console.log("DB connected successfully")

    app.listen(PORT,()=>{
        console.log(`Server is running on PORT:${PORT}`)
    })
}).catch(error=>console.log(error))