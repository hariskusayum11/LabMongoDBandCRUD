const mongoose = require('mongoose');

// สร้าง Schema สำหรับ Product
const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    product_type: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
});

// สร้างโมเดลจาก Schema และส่งออกโมเดล
module.exports = mongoose.model('Product', productSchema);
