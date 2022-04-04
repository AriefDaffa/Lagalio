import './App.css';
import { Provider } from 'react-redux';
import Home from './pages/home';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<Home />
				</header>
			</div>
		</Provider>
	);
}

export default App;
