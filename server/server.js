const express = require('express')
const cors = require('cors')
const connectmongodb = require('./config/db')           // importing Mongodb function from db.js
const userRoutes = require('./Routes/userRoutes')       // Passing the /users routes 
require('dotenv').config()

const app = express()                                   // Initialising App
connectmongodb()                                        // Database Connection

app.use(express.json())                                 // Initialising JSON 
app.use(cors())


app.use("/user",userRoutes);

app.use("/executive",userRoutes);

app.listen(8081,()=>{
    console.log('Server Started')
})