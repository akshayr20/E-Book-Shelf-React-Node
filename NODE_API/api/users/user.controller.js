const userService = require('./users.service');

module.exports.signUp = async (req, res) => {
	try {
		const name = req.body.name;
		const email = req.body.email;
		const password = req.body.password;
		const createUserStatus = await userService.signUp(name, email, password);

		res.status(201).json({
			message: createUserStatus
		});
	} catch (error) {
		console.log('here', error);
		res.status(500).json({ errorMessage: error.message });
	}
};

module.exports.login = async (req, res) => {
	try {
		const email = req.body.email;
		const password = req.body.password;
		const jwtToken = await userService.login(email, password);
		res.status(201).json(jwtToken);
	} catch (error) {
		return res.status(401).json({ message: 'AUTH_FAILED' });
	}
};

module.exports.removeUser = async (req, res) => {
	try {
		const id = req.params.id;
		await userService.removeUser(id);
		res.status(200).json({ message: 'USER_DELETED' });
	} catch (error) {
		res.status(500).json(error);
	}
};
