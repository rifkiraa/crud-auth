const db = require('../config/db');

const Sale = {
  create: (data, callback) => {
    const sql = 'INSERT INTO sales SET ?';
    db.query(sql, data, callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM sales', callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM sales WHERE id = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE sales SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM sales WHERE id = ?', [id], callback);
  }
};

module.exports = Sale;
