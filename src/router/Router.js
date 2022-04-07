import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Trending } from '../pages';

const Router = () => {
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/trending" exact>
				<Trending />
			</Route>
		</Switch>
	);
};

export default Router;
