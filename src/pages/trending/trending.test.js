import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Trending from '.';
import store from '../../redux/store';

test('render trending component', () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Trending />
			</BrowserRouter>
		</Provider>
	);
});
