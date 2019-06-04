const productService = require('./product.service');

module.exports.getAllProducts = async (req, res) => {
	try {
		const response = await productService.getAllProducts();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ errorMessage: error });
	}
};

module.exports.getProductById = async (req, res) => {
	try {
		const response = await productService.getProductById(req.params.id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports.createProduct = async (req, res) => {
	try {
		const response = await productService.createProduct(req.body);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports.updateProductById = async (req, res) => {
	try {
		const response = await productService.updateProductById(req.params.id, req.body);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports.deleteProductById = async (req, res) => {
	try {
		const response = await productService.deleteProductById(req.params.id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};
