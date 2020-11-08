const express = require('express')
const database = require('./src/database/connection')
const router = require('./src/routes/routes')
const app = express()

app.use(express.json())
app.use(router)

app.listen(4000, () => {
    console.log('Rodando na porta 4000');
})


app.get('/', (req, res) => {
    response.send("Hello world")
})