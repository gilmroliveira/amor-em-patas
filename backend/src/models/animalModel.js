const db = require('../config/db');

const Animal = {
  listarTodos: (callback) => {
    const sql = 'SELECT * FROM animais ORDER BY id DESC';
    db.query(sql, callback);
  },

  criar: (dados, callback) => {
    const sql = 'INSERT INTO animais (nome, especie, idade, sexo, descricao, status) VALUES (?, ?, ?, ?, ?, ?)';
    const valores = [
      dados.nome,
      dados.especie,
      dados.idade || null,
      dados.sexo || null,
      dados.descricao || null,
      dados.status || 'Disponível'
    ];
    db.query(sql, valores, callback);
  },

  atualizarStatus: (id, status, callback) => {
    const sql = 'UPDATE animais SET status = ? WHERE id = ?';
    db.query(sql, [status, id], callback);
  },

  remover: (id, callback) => {
    const sql = 'DELETE FROM animais WHERE id = ?';
    db.query(sql, [id, callback]);
  }
};

module.exports = Animal;
