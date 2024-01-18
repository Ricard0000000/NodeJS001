const express = require ("express")
const app = express()
const routerLivros = require('./rotas/livro.js')
const port = 8900

app.get('/livros',(req,res) => {
    res.send("hello men")
})

app.post('/livros',(req,res) => {
    res.send('Você fez uma requisição POST')
})

app.listen(port,()=>{
    console.log(`listening the door ${port}`)
})