import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import Router from './router/Router';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<Router />
					</header>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
