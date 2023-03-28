const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const kucaController = require('./controllers/kucaController')


const app = express()

//connect to db
mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URL, () => {
        console.log('DB is successfully connected')
    })

//routes and middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/kuca', kucaController)

//connect server
app.listen(process.env.PORT, () => {
    console.log('Server has been started successfully')
})