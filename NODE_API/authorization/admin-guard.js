const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.userData = decoded;
		if (!req.userData.isAdmin) {
			throw new Error('AUTH_FAILED');
		}
		next();
	} catch (error) {
		return res.status(401).json({
			message: 'AUTH_FAILED'
		});
	}
};
