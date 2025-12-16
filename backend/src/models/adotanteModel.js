const db = require('../config/db');

const Adotante = {
  listarTodos: (callback) => {
    const sql = 'SELECT * FROM adotantes ORDER BY id DESC';
    db.query(sql, callback);
  },

  criar: (dados, callback) => {
    const sql = 'INSERT INTO adotantes (nome, cpf, telefone, endereco) VALUES (?, ?, ?, ?)';
    const valores = [dados.nome, dados.cpf, dados.telefone, dados.endereco];
    db.query(sql, valores, callback);
  }
};

module.exports = Adotante;
