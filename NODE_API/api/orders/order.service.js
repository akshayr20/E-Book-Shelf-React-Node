const Order = require('./order.model');
const Product = require('../products/product.model');
const mongoose = require('mongoose');

module.exports.getAllOrders = async () => {
	try {
		const orders = await Order.find()
			.select('productId quantity _id')
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
					quantity: order.quantity,
					request: {
						type: 'GET',
						description: 'PRODUCT_INFO',
						url: `http://localhost:3000/products/${order.productId}`
					}
				};
			})
		};
	} catch (error) {
		throw error;
	}
};

module.exports.getOrderById = async id => {
	try {
		const order = await Order.findById(id).select('productId quantity _id');
		if (!order) {
			throw new Error('NO_ORDER_FOUND');
		}
		return {
			_id: order._id,
			productId: order.productId,
			quantity: order.quantity,
			request: {
				type: 'GET',
				description: 'PRODUCT_INFO',
				url: `http://localhost:3000/products/${order.productId}`
			}
		};
	} catch (error) {
		throw error;
	}
};

module.exports.createOrder = async (productId, quantity) => {
	try {
		const product = await Product.findById(productId);
		if (!product) {
			throw new Error('PRODUCT_NOT_FOUND');
		}
		const order = new Order({
			_id: new mongoose.Types.ObjectId(),
			productId: productId,
			quantity: quantity
		});
		const result = await order.save();
		return {
			message: 'ORDER_CREATED',
			request: {
				type: 'GET',
				description: 'ORDER_INFO',
				url: `http://localhost:3000/orders/${result._id}`
			}
		};
	} catch (error) {
		throw error;
	}
};

module.exports.updateOrderById = async (productId, quantity) => {
	try {
		const updatedOrder = {
			$set: {
				quantity: quantity
			}
		};
		const result = await Order.update({ _id: productId }, updatedOrder);
		return {
			message: 'ORDER_UPDATED',
			request: {
				type: 'GET',
				description: 'ORDER_INFO',
				url: `http://localhost:3000/orders/${result._id}`
			}
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
