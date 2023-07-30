const express = require("express")
const { v4: uuidv4 } = require('uuid')
const router = express.Router()
const app = express()
const porta = 3333

//POST
function criaManhwa(req, response) {
    const novaManhwa = {
        id: uuidv4(),
        obra: req.body.obra,
        imagem: req.body.imagem,
        sinopse: req.body.sinopse
    }
    
    manhwas.push(novaManhwa)

    response.json(manhwas)
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.post('/manhwas', criaManhwa))

app.listen(porta, mostraPorta)