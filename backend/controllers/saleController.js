const Sale = require('../models/saleModel');

exports.createSale = (req, res) => {
  const { product_name, price, coupon_code, final_price } = req.body;
  const user_id = req.user.id;

  if (!product_name || !price || !final_price) {
    return res.status(400).json({ message: 'Data tidak lengkap' });
  }

  const data = { user_id, product_name, price, coupon_code, final_price };
  Sale.create(data, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Penjualan berhasil ditambahkan' });
  });
};

exports.getSales = (req, res) => {
  Sale.findAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getSaleById = (req, res) => {
  Sale.findById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: 'Penjualan tidak ditemukan' });
    res.json(results[0]);
  });
};

exports.updateSale = (req, res) => {
  Sale.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Penjualan berhasil diupdate' });
  });
};

exports.deleteSale = (req, res) => {
  Sale.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Penjualan berhasil dihapus' });
  });
};
