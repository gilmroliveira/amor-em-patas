const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/db'); // só para inicializar conexão e logar

const animaisRoutes = require('./routes/animaisRoutes');
const adotantesRoutes = require('./routes/adotantesRoutes');
const adocoesRoutes = require('./routes/adocoesRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/animais', animaisRoutes);
app.use('/api/adotantes', adotantesRoutes);
app.use('/api/adocoes', adocoesRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
