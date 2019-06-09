import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';

import App from './components/app';
import reducers from './reducers';
import { setCurrentUser } from './actions/auth-actions';

const store = createStore(reducers, applyMiddleware(thunk));

const token = localStorage.jwtToken;
if (token) {
	store.dispatch(setCurrentUser(jwt.decode(token)));
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
