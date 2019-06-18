const Order = require('./order.model');
const Product = require('../products/product.model');
const mongoose = require('mongoose');

module.exports.getAllOrders = async () => {
	try {
		const orders = await Order.find()
			.select('product purchaseQuantity _id date')
			.populate('product');
		if (!orders.length) {
			throw new Error('NO_ORDER_FOUND');
		}
		return {
			count: orders.length,
			orders
		};
	} catch (error) {
		throw error;
	}
};

module.exports.getUserOrders = async id => {
	try {
		const orders = await Order.find({ user: id })
			.select('product purchaseQuantity _id date')
			.populate('product');
		if (!orders) {
			throw new Error('NO_ORDER_FOUND');
		}
		return { orders };
	} catch (error) {
		throw error;
	}
};

module.exports.createOrder = async (userCart, userId ) => {
	try {
		for (const item of userCart) {
			const { productId, purchaseQuantity} = item;
			const product = await Product.findById(productId);
			if (!product) {
				throw new Error('PRODUCT_NOT_FOUND');
			}

			if (product.availableStock < purchaseQuantity) {
				if (product.availableStock) {
					throw new Error(`Sorry Only ${product.availableStock}  items left in stock`);
				}
				throw new Error(`Item Currently Out of Stock`);
			}

			const order = new Order({
				_id: new mongoose.Types.ObjectId(),
				product: productId,
				purchaseQuantity: purchaseQuantity,
				user: userId
			});

			await order.save();

			await Product.update({ _id: productId }, { $inc: { availableStock: -purchaseQuantity } });
		}

		return {
			message: 'ORDER_CREATED'
		};
	} catch (error) {
		throw error;
	}
};

module.exports.deleteOrderById = async id => {
	try {
		await Order.remove({ _id: id });
		return { message: 'ORDER_DELETED' };
	} catch (error) {
		throw error;
	}
};
