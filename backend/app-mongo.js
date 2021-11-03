const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//modelos 
const Cliente = require ('./models/cliente');
const Usuario = require ('./models/usuario');
const Lembrete = require ('./models/lembrete');

const mongoose = require ('mongoose');
mongoose.set('debug', true);
//mongoose.set('useFindAndModify', false);



mongoose.connect('mongodb+srv://usjt-dream-team:d6D8omkbDj8P2DhZ@cluster0.hmvri.mongodb.net/anotaai?retryWrites=true&w=majority')
.then(() => {
    console.log ("Conexão OK")
  }).catch(() => {
    console.log("Conexão NOK")
  });

app.use(bodyParser.json());

  app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT, PATCH, DELETE, OPTIONS');
  next();
});


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next()
});

app.post ('/api/clientes', (req, res, next) => {
    const cliente = new Cliente({
      nome: req.body.nome,
      fone: req.body.fone,
      email: req.body.email
    })
    cliente.save();
    console.log (cliente);
    res.status(201).json({mensagem: 'Cliente inserido'})
});

app.get('/api/clientes', (req, res, next) => {
  Cliente.find().then(documents => {
    res.status(200).json({
      mensagem: "Tudo OK",
      clientes: documents
    });
  })
});



//http://localhost:4000/api/usuarios
app.get('/api/usuarios', (req, res, next) => {
  Usuario.find().then(documents => {
    res.status(200).json({
      mensagem: "Tudo ok",
      usuarios: documents
    });
  })
})

app.post('/api/usuarios', (req, res, next) => {
  const usuario = new Usuario({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    genero: req.body.genero,
    senha: req.body.senha,
  })
  usuario.save();
  console.log(usuario);
  res.status(201).json({ mensagem: "Usuario inserido" })
})


app.post('/api/login', (req, res, next) => {
  
  Usuario.findOne({ 'nome': req.body.nome, 'senha' : req.body.senha}).then(documents => {
    if(documents){
      res.status(200).json({
        usuario: documents
      });
    }else{
      res.status(404).json({
        mensagem: "usuario e ou senha invalidos",
      });
    }
  })
})

//http://localhost:4000/api/lembretes
app.get('/api/lembretes', (req, res, next) => {
  Lembrete.find().then(documents => {
    res.status(200).json({
      mensagem: "ok",
      lembretes: documents
    });
  })
})

app.post('/api/lembretes', (req, res, next) => {
  const lembrete = new Lembrete({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    criadoem: req.body.criadoem,
    prazo: req.body.prazo,
  })
  lembrete.save();
  console.log(lembrete);
  res.status(201).json({ mensagem: "lembrete inserido", lembrete: lembrete })
})

app.delete('/api/lembretes/:id', (req, res, next) => {
  Lembrete.findByIdAndRemove(req.params.id, {useFindAndModify: false}).exec();  
  res.status(200).json({ mensagem: "lembrete apagado" })
})


app.put('/api/lembretes/:id', (req, res, next) => {
  console.log('bodyMsg', req.body);
  const lembrete = {
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    criadoem: req.body.criadoem,
    prazo: req.body.prazo,
  };
  console.log('lembrete to be update', lembrete);
  


  Lembrete.replaceOne({'_id':req.params.id}, lembrete, {useFindAndModify: false}).exec();  
  res.status(200).json({ mensagem: "lembrete atualizado" })
})


app.get('/api/lembretes/:id', (req, res, next) => {

  Lembrete.findById(req.params.id)
  .then(lembrete => {
    if(lembrete){
      res.status(200).json({
        lembrete
      });
    }else{
      res.status(404).json({
        mensagem: "lembrete nao encontrado",
      });
    }
  })
})







module.exports = app
