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
			...products
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
		const { _id, name, price, productImage, description } = product;
		return {
			_id,
			name,
			price,
			productImage,
			description
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
		await product.save();
		return {
			message: 'PRODUCT_CREATED'
		};
	} catch (error) {
		throw error;
	}
};

module.exports.updateProductById = async (id, updatedProduct) => {
	try {
		await Product.update(
			{ _id: id },
			{
				$set: updatedProduct
			}
		);
		return {
			message: 'PRODUCT_UPDATED'
		};
	} catch (error) {
		throw error;
	}
};

module.exports.deleteProductById = async id => {
	try {
		await Product.remove({ _id: id });
		return {
			message: 'PRODUCT_DELETED'
		};
	} catch (error) {
		throw error;
	}
};
