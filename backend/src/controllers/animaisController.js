const Animal = require('../models/animalModel');

exports.listar = (req, res) => {
  Animal.listarTodos((err, resultados) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao listar animais' });
    }
    res.json(resultados);
  });
};

exports.criar = (req, res) => {
  const { nome, especie, idade, sexo, descricao, status } = req.body;
  if (!nome || !especie) {
    return res.status(400).json({ erro: 'Nome e espécie são obrigatórios' });
  }

  Animal.criar({ nome, especie, idade, sexo, descricao, status }, (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao cadastrar animal' });
    }
    res.status(201).json({ id: resultado.insertId, nome, especie, idade, sexo, descricao, status: status || 'Disponível' });
  });
};
