// @ts-check

const orderService = require('./order.service');

module.exports.getUserOrders = async (req, res) => {
	try {
		let response;
		if (req.userData.isAdmin) {
			response = await orderService.getAllOrders();
		} else {
			response = await orderService.getUserOrders(req.userData.userId);
		}
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports.createOrder = async (req, res) => {
	try {
		const userCart = req.body.userCart;
		const response = await orderService.createOrder(userCart, req.userData.userId);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports.deleteOrderById = async (req, res) => {
	try {
		const response = await orderService.deleteOrderById(req.params.id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};
