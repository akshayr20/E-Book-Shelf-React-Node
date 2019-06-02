const productService = require('./product.service');

module.exports.getAllProducts = async (req, res) => {
	try {
		const products = await productService.getAllProducts();
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports.getProductById = async (req, res) => {
	try {
		const id = req.params.id;
		const product = await productService.getProductById(id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports.createProduct = async (req, res) => {
	try {
		const product = {
			name: req.body.name,
			price: req.body.price,
			quantity: req.body.quantity,
			description: req.body.description,
			productImage: req.file.path
		};

		const response = await productService.createProduct(product);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports.updateProductById = async (req, res) => {
	try {
		const id = req.params.id;
		const response = await productService.updateProductById(id, req.body);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports.deleteProductById = async (req, res) => {
	try {
		const id = req.params.id;
		const response = await productService.deleteProductById(id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};
