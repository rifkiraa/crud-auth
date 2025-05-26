const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const saleController = require('../controllers/saleController');

router.post('/sales', protect, saleController.createSale);       // CREATE
router.get('/sales', protect, saleController.getSales);          // READ ALL
router.get('/sales/:id', protect, saleController.getSaleById);   // READ ONE
router.put('/sales/:id', protect, saleController.updateSale);    // UPDATE
router.delete('/sales/:id', protect, saleController.deleteSale); // DELETE

module.exports = router;
