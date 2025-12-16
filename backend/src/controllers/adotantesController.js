const Adotante = require('../models/adotanteModel');

exports.listar = (req, res) => {
  Adotante.listarTodos((err, resultados) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao listar adotantes' });
    }
    res.json(resultados);
  });
};

exports.criar = (req, res) => {
  const { nome, cpf, telefone, endereco } = req.body;
  if (!nome || !cpf) {
    return res.status(400).json({ erro: 'Nome e CPF são obrigatórios' });
  }

  Adotante.criar({ nome, cpf, telefone, endereco }, (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao cadastrar adotante' });
    }
    res.status(201).json({ id: resultado.insertId, nome, cpf, telefone, endereco });
  });
};
