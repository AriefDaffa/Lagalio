import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PlaylistForm from '.';
import store from '../../../redux/store';

describe('Home component', () => {
	it('PlaylistForm rendered successfully', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<PlaylistForm playlistData="1" />
				</BrowserRouter>
			</Provider>
		);
	});
});
