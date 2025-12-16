const db = require('../config/db');

const Adocao = {
  listarTodas: (callback) => {
    const sql = `
      SELECT a.id, ani.nome AS animal, adt.nome AS adotante, a.data_solicitacao, a.status
      FROM adocoes a
      JOIN animais ani ON ani.id = a.id_animal
      JOIN adotantes adt ON adt.id = a.id_adotante
      ORDER BY a.data_solicitacao DESC
    `;
    db.query(sql, callback);
  },

  criar: (dados, callback) => {
    const sql = 'INSERT INTO adocoes (id_animal, id_adotante, data_solicitacao, status) VALUES (?, ?, ?, ?)';
    const valores = [
      dados.id_animal,
      dados.id_adotante,
      dados.data_solicitacao,
      dados.status || 'Pendente'
    ];
    db.query(sql, valores, callback);
  }
};

module.exports = Adocao;
