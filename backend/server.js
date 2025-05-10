const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

let bicicletas = [];

// criar um card de produto (bicicleta)
app.post('/bicicletas', (req, res) => {
  const bicicleta = req.body;
  bicicletas.push(bicicleta);
  res.status(201).send(bicicleta);
});

// requisição de todos os cards
app.get('/bicicletas', (req, res) => {
  res.send(bicicletas);
});

// editar um card/produto
app.put('/bicicletas/:id', (req, res) => {
  const { id } = req.params;
  const updatedbicicleta = req.body;
  bicicletas = bicicletas.map(bicicleta => bicicleta.id === id ? updatedbicicleta : bicicleta);
  res.send(updatedbicicleta);
});

// deletar um card/produto
app.delete('/bicicletas/:id', (req, res) => {
  const { id } = req.params;
  bicicletas = bicicletas.filter(bicicleta => bicicleta.id !== id);
  res.status(204).send();
});

// confirmacao da porta do servidor no console
app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}.`);
});