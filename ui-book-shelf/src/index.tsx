import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import setAuthorizationToken from './api/set-authorization-token';

import App from './components/app';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
