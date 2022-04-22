import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, ListPlaylist, Login, Playlist, Profile } from '../pages';
import { setToken } from '../redux/slice/token-slice';
import PrivateRoute from '../utils/PrivateRoute';

const Router = () => {
	const dispatch = useDispatch();

	let accessToken = window.location.hash
		.substring(1, window.location.hash.length - 1)
		.split('&')[0]
		.split('=')[1];

	if (accessToken) {
		dispatch(setToken(accessToken));
	}

	return (
		<BrowserRouter>
			<Switch>
				<PrivateRoute path="/create-playlist" component={Home} />
				<PrivateRoute path="/playlist/:id" component={Playlist} />
				<PrivateRoute path="/playlist" component={ListPlaylist} />
				<PrivateRoute path="/profile" component={Profile} />
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
