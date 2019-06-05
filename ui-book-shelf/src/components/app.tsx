import React from 'react';
import Header from './header';

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
	render() {
		return (
			<div className="container">
				<Header />
			</div>
		);
	}
}

export default App;
