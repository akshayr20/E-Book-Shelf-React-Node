const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
	date: { type: Date, required: true, default: Date.now() },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	purchaseQuantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Order', orderSchema);
