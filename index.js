import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config()
let app = express() 
let port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

const uri = process.env.URI 
mongoose.connect(uri)
mongoose.connection.once("open", () => {
    console.log("mongodb server is connected")
})

app.listen(port, () => console.log("server is connected to port 3000"))
