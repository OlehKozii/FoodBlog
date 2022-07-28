require("dotenv").config()
const express = require("express")
const cors= require("cors")
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const path = require('path');

const app = express()
const port=process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "../../client/build")));

app.use(cors())

app.use(express.json())

const start = async ()=>{
    try {
        app.listen(port, ()=>{
            console.log(`I\`m listening to port ${port}`)
        })
        await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log(error)
    }
    
}
start()