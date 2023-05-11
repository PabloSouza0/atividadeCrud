const express = require('express');
const connection = require('./connectionBD');
const app = express();

app.use(express.json());

// Rota para criar um novo registro
app.post('/registros', (req, res) => {
  const { nome, email } = req.body;
  const sql = 'INSERT INTO registros (nome, email) VALUES (?, ?)';
  connection.query(sql, [nome, email], (error, results) => {
    if (error) throw error;
    res.send('Registro criado com sucesso!');
  });
});

// Rota para ler um registro existente
app.get('/registros/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM registros WHERE id = ?';
  connection.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.json(results[0]);
  });
});

// Rota para atualizar um registro existente
app.put('/registros/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  const sql = 'UPDATE registros SET nome = ?, email = ? WHERE id = ?';
  connection.query(sql, [nome, email, id], (error, results) => {
    if (error) throw error;
    res.send('Registro atualizado com sucesso!');
  });
});

// Rota para excluir um registro existente
app.delete('/registros/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM registros WHERE id = ?';
  connection.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.send('Registro excluído com sucesso!');
  });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
