
//importando o pacote
const mongoose = require ('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const usuarioSchema = mongoose.Schema ({
nome: {type: String, required: true},
telefone: {type: String, required: false, default: '00000000'},
email: {type: String, required: true},
genero: {type: String, required: true},
senha: {type: String, required: true}
});


//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Usuario', usuarioSchema);