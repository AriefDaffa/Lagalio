import React from 'react';
import Header from '../../atomic/header';
import './login.css';

class Login extends React.Component {
	generateRandomString = (length) => {
		var text = '';
		var possible =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (var i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	};

	handleLogin = (e) => {
		e.preventDefault();
		var stateKey = 'spotify_auth_state';
		var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
		var redirect_uri = 'http://localhost:3000/';

		var state = this.generateRandomString(16);

		localStorage.setItem(stateKey, state);
		var scope = 'user-read-private user-read-email';

		var url = 'https://accounts.spotify.com/authorize';
		url += '?response_type=token';
		url += '&client_id=' + encodeURIComponent(client_id);
		url += '&scope=' + encodeURIComponent(scope);
		url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
		url += '&state=' + encodeURIComponent(state);

		window.location = url;
	};

	render() {
		return (
			<div className="login-container">
				<Header>Oops, sepertinya kamu belum login nih 😢</Header>
				<Header size="title">Login Sekarang!</Header>
				<div onClick={this.handleLogin} className="button">
					Klik disini untuk Login
				</div>
			</div>
		);
	}
}

export default Login;
