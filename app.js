const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Porta compatível com Azure

app.get('/', (req, res) => {
  res.send('Olá Mundo! Aplicação Node.js no Azure');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
