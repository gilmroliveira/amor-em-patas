const Adocao = require('../models/adocaoModel');

exports.listar = (req, res) => {
  Adocao.listarTodas((err, resultados) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao listar adoções' });
    }
    res.json(resultados);
  });
};

exports.criar = (req, res) => {
  const { id_animal, id_adotante, data_solicitacao, status } = req.body;
  if (!id_animal || !id_adotante || !data_solicitacao) {
    return res.status(400).json({ erro: 'id_animal, id_adotante e data_solicitacao são obrigatórios' });
  }

  Adocao.criar({ id_animal, id_adotante, data_solicitacao, status }, (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao registrar adoção' });
    }
    res.status(201).json({ id: resultado.insertId });
  });
};
