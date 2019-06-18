const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true)

module.exports = {
	mongoose
};

// async function createConnection() {
// 	let mongoOptions = {
// 		useNewUrlParser: true
// 	};

// 	if ('' !== MONGO_USERNAME && '' !== MONGO_PASSWORD) {
// 		mongoOptions.auth = {
// 			user: MONGO_USERNAME,
// 			password: MONGO_PASSWORD
// 		};
// 	}
// 	mongoose.set('useCreateIndex', true);
// 	mongoose.connect(MONGODB_PROD_URI, mongoOptions);
// 	return mongoose;
// }

// module.exports = { createConnection };