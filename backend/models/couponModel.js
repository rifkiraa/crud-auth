const db = require('../config/db');

const Coupon = {
  findByCode: (code, callback) => {
    const sql = 'SELECT * FROM coupons WHERE code = ? AND expires_at > NOW()';
    db.query(sql, [code], callback);
  }
};

module.exports = Coupon;
