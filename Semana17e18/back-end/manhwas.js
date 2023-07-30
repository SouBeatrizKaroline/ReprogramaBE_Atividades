const express = require("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota
const cors = require('cors') // aqui estou trazendo o pacote cors que permite consumir essa api no front-end
const conectaBancoDeDados = require('./bancoDeDados') //aqui estou ligando ao arquivo bancoDeDados
conectaBancoDeDados() // estou chamando a função que conecta o banco de dados

const Manhwa = require('./manhwaModel')

const app = express() //aqui estou iniciando o app
app.use(express.json())
app.use(cors())

const porta = 3333 //aqui estou criando a porta

//GET
async function mostraManhwas(request, response) {
    try {
        const manhwasVindasDoBancoDeDados = await Manhwa.find()

        response.json(manhwasVindasDoBancoDeDados)
    }catch (erro) {
        console.log(erro)
    }
}

//POST
async function criaManhwa(request, response) {
    const novaManhwa = new Manhwa({
        obra: request.body.obra,
        imagem: request.body.imagem,
        sinopse: request.body.sinopse,
        opiniao: request.body.opiniao
    }) 

    try {
        const manhwaCriada = await novaManhwa.save()
        response.status(201).json(manhwaCriada)
    } catch (erro) {
        console.log(erro)
    }
}

//PATCH
async function corrigeManhwa(request, response) {
    try {
        const manhwaEncontrada = await Manhwa.findById(request.params.id)

        if (request.body.obra) {
            manhwaEncontrada.obra = request.body.obra
        }
    
        if (request.body.sinopse) {
            manhwaEncontrada.sinopse = request.body.sinopse
        }
    
        if (request.body.imagem) {
            manhwaEncontrada = request.body.imagem
        }

        if (request.body.opiniao) {
            manhwaEncontrada = request.body.opiniao
        }

        const manhwaAtualizadaNoBancoDeDados = await manhwaEncontrada.save()

        response.json(manhwaAtualizadaNoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaManhwa(request, response) {
    try {
        await Manhwa.findByIdAndDelete(request.params.id)
        response.json({ messagem: 'Manhwa deletada com sucesso!'})
    } catch(erro) {
        console.log(erro)
    }
}


app.use(router.get('/manhwas', mostraManhwas)) //configurei rota GET /manhwas
app.use(router.post('/manhwas', criaManhwa)) //configurei rota POST /manhwas
app.use(router.patch('/manhwas/:id', corrigeManhwa)) // configurei rota PATCH /manhwas/:id
app.use(router.delete('/manhwas/:id', deletaManhwa)) // configurei rota DELETE /manhwas/:id

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta) //servidor ouvindo a porta