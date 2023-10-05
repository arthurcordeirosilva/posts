const mongoose = require('mongoose')
mongoose.set('strictQuery',true) //uso ideal para o mongoose

//conecta com o mongo atlas
async function main(){ //função assincrona, não precisa recarregar a página

    //aguardamos o link do banco 
    await mongoose.connect('mongodb+srv://arthur:<meupaudeoculos>@cluster0.ovbvczi.mongodb.net/?retryWrites=true&w=majority')
    console.log('Conectado ao mongoDB!') //retorna a mensagem de sucesso com a conexão ao bd

}

//executo o main() e caso der erro, exibe no console
main().catch((err) => console.log(err))

//exporta o modulo para ser usado em outros arquivos
module.exports = main