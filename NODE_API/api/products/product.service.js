const Product = require('./product.model');
const mongoose = require('mongoose');

module.exports.getAllProducts = async () => {
	try {
		const products = await Product.find().select('name price _id productImage description');
		if (!products.length) {
			throw new Error('NO_PRODUCT_FOUND');
		}
		return {
			count: products.length,
			products: products.map(product => {
				return {
					...product,
					request: {
						type: 'GET',
						description: 'PRODUCT_INFO',
						url: `http://localhost:3000/products/${product._id}`
					}
				};
			})
		};
	} catch (error) {
		throw error;
	}
};

module.exports.getProductById = async id => {
	try {
		const product = await Product.findById(id).select('name price productImage description');
		if (!product) {
			throw new Error('NO_PRODUCT_FOUND');
		}
		return {
			...product,
			request: {
				type: 'GET',
				description: 'GET_ALL_PRODUCTS',
				url: `http://localhost:3000/products`
			}
		};
	} catch (error) {
		throw error;
	}
};

module.exports.createProduct = async productData => {
	try {
		const product = new Product({
			_id: new mongoose.Types.ObjectId(),
			...productData
		});
		const result = await product.save();
		return {
			message: 'PRODUCT_CREATED',
			request: {
				type: 'GET',
				description: 'GET_PRODUCT_INFO',
				url: `http://localhost:3000/products/${result._id}`
			}
		};
	} catch (error) {
		throw error;
	}
};

module.exports.updateProductById = async (id, product) => {
	try {
		const updatedProduct = {
			$set: product
		};
		await Product.update({ _id: id }, updatedProduct);
		return {
			message: 'PRODUCT_UPDATED',
			request: {
				type: 'GET',
				description: 'GET_PRODUCT_INFO',
				url: `http://localhost:3000/products/${id}`
			}
		};
	} catch (error) {
		throw error;
	}
};

module.exports.deleteProductById = async id => {
	try {
		await Product.remove({ _id: id });
		return {
			message: 'PRODUCT_DELETED',
			request: {
				type: 'GET',
				description: 'GET_ALL_PRODUCTS',
				url: `http://localhost:3000/products`
			}
		};
	} catch (error) {
		throw error;
	}
};
