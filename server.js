const express = require('express')
const app = express()


//routes
app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(3002, ()=>{
    console.log(`API Node rodando na porta 3002`)
})

