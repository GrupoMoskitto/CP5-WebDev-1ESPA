const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database').default; // Importar o banco de dados
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// criar um card de produto (bicicleta)
app.post('/bicicletas', (req, res) => {
  const { id, name, description, price } = req.body;
  db.run("INSERT INTO bicicletas (id, name, description, price) VALUES (?, ?, ?, ?)", [id, name, description, price], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send(req.body);
  });
});

// requisição de todos os cards
app.get('/bicicletas', (req, res) => {
  db.all("SELECT * FROM bicicletas", [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

// editar um card/produto
app.put('/bicicletas/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  db.run("UPDATE bicicletas SET name = ?, description = ?, price = ? WHERE id = ?", [name, description, price, id], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(req.body);
  });
});

// deletar um card/produto
app.delete('/bicicletas/:id', (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM bicicletas WHERE id = ?", [id], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(204).send();
  });
});

// deletar todos os produtos
app.delete('/bicicletas', (req, res) => {
  db.run("DELETE FROM bicicletas", function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(204).send();
  });
});

// debug: confirmacao da porta do servidor no console
app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}.`);
});
