require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const personRoutes = require('./Routes/personRoutes')

app.use('/person', personRoutes)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.kluowuk.mongodb.net/apidatabase?retryWrites=true&w=majority`
)
.then(() => {
    console.log('Conectado ao Mongodb')
    app.listen(3000)
})
.catch(() => {
    console.log('Erro ao conectar Mongodb')
})

