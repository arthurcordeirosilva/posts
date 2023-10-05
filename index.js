// chamadas para as depêndencias 
const cors = require('cors') //cors limita quem acessa a api.
const express = require('express') 
const app = express()
const PORT = 3000
//aqui requerimos o bd
require('./db')
const postsController = require('./controllers/PostsController')

//cors trás mais segurança para aplicação (api)
app.use(cors())

//requerimos express e ele retorna arquivos json
app.use(express.json())

//ROTAS PARA O CRUD
app.post('/posts', postsController.cadastrarPost)

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
    }
)