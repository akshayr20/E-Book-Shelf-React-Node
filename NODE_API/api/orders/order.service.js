const Order = require('./order.model');
const Product = require('../products/product.model');
const mongoose = require('mongoose');

module.exports.getAllOrders = async () => {
	try {
		const orders = await Order.find()
			.select('productId purchaseQuantity _id')
			.populate('product', 'name');
		if (!orders.length) {
			throw new Error('NO_ORDER_FOUND');
		}
		return {
			count: orders.length,
			orders: orders.map(order => {
				return {
					_id: order._id,
					productId: order.productId,
					purchaseQuantity: order.purchaseQuantity,
					userId: order.userId
				};
			})
		};
	} catch (error) {
		throw error;
	}
};

module.exports.getOrderById = async id => {
	try {
		const order = await Order.findById(id).select('productId purchaseQuantity _id');
		if (!order) {
			throw new Error('NO_ORDER_FOUND');
		}
		const { _id, productId, purchaseQuantity } = order;
		return {
			_id,
			productId,
			purchaseQuantity
		};
	} catch (error) {
		throw error;
	}
};

module.exports.createOrder = async (productId, purchaseQuantity, userId) => {
	try {
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
			productId,
			purchaseQuantity,
			userId
		});

		await order.save();

		await Product.update({ _id: productId }, { $inc: { availableStock: -purchaseQuantity } });

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
		return {
			message: 'ORDER_DELETED',
			request: {
				type: 'GET',
				description: 'ALL_ORDER',
				url: `http://localhost:3000/orders`
			}
		};
	} catch (error) {
		throw error;
	}
};
