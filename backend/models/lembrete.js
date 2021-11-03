
//importando o pacote
const mongoose = require ('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const lembreteSchema = mongoose.Schema ({
    _id: {type: mongoose.Types.ObjectId, auto: true},
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    criadoem: {type: Date, required: true, default: new Date()},
    prazo: {type: Date, required: true}
});


//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Lembrete', lembreteSchema);