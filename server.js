require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const tarefaRouter = require('./routes/tarefaRoute')

const app = express()

const PORT = process.env.PORT || 3001
const MONGO_URL = process.env.MONGO_URL

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.get('/', (req, res)=>{
    res.send('API REST para controle de tarefas')
})

app.use('/api/tarefas', tarefaRouter)

mongoose.connect(MONGO_URL)
.then(() =>{
    console.log('Conexão com MongoDB')
    app.listen(3002, ()=>{
        console.log(`API rodando na porta ${PORT}`)
    })
}).catch((error) =>{
    console.log(error)
})