import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8080'
});

const token = localStorage.jwtToken;

if (token) {
	instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} else {
	delete instance.defaults.headers.common['Authorization'];
}

export default instance;
