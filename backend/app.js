const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://usjt-dream-team:d6D8omkbDj8P2DhZ@cluster0.hmvri.mongodb.net/anotaai?retryWrites=true&w=majority')
.then(() => {
    console.log ("Conexão OK")
  }).catch(() => {
    console.log("Conexão NOK")
  });

app.use(bodyParser.json());

const usuarios = [
  {
    nome: 'José',
    sexo: 'Masculino',
    fone: '111111111',
    email: 'jose@jose.com.br',
    senha: '1234'
  },
  {
    nome: 'Maria',
    sexo: 'Feminino',
    fone: '22222222',
    email: 'maria@maria.com.br',
    senha: '123'
  },
  {
    nome: 'Afonso',
    sexo: 'Masculino',
    fone: '333333333',
    email: 'afon@soso.com.br',
    senha: '12'
  }
];

const lembretes = [
  {
    titulo: 'trabalho',
    criadoem: '01/10',
    prazo: '30/10',
    descricao: 'trabalho de sistemas'
  },
  {
    titulo: 'prova',
    criadoem: '12/11',
    prazo: '12/11',
    descricao: 'prova de desenvolvimento web'
  }
];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next()
});

//http://localhost:4000/api/usuarios
app.get('/api/usuarios', (req, res, next) => {
  res.status(200).json({
    mensagem: "Tudo ok",
    usuarios: usuarios
  })
})

app.post('/api/usuarios', (req, res, next) => {
  const usuario = req.body;
  console.log(usuario);
  res.status(201).json({ mensagem: "Usuario inserido" })
})

//http://localhost:4000/api/lembretes
app.get('/api/lembretes', (req, res, next) => {
  res.status(200).json({
    lembretes: lembretes
  })
})

app.post('/api/lembretes', (req, res, next) => {
  const lembrete = req.body;
  console.log(lembrete);
  lembretes.push(lembrete);
  res.status(201).json({ mensagem: "Lembrete inserido" })
})

module.exports = app
