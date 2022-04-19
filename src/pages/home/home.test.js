import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '.';
import store from '../../redux/store';

test('render home component', () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		</Provider>
	);
});
