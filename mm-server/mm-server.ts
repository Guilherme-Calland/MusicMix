import express = require('express');

var mmserver = express();

// var alunos = [{nome:'Paulo',cpf:'683',email:'phmb@cin.br',metas:{'requisitos':'MA'}},{nome:'Mariana',cpf:'456',email:'@mcb@cin.br',metas:{'requisitos':'MPA'}}];
var musicians = [{nome:'Joao', cpf:'683'}];

mmserver.get('/', function (req, res) {
  res.send(musicians);
})

mmserver.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
