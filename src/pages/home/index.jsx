import React from 'react';
import { Container, Header, Login, Table } from '../../components';
import './home.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			accessToken: window.location.hash
				.substring(1, window.location.hash.length - 1)
				.split('&')[0]
				.split('=')[1],
			result: [],
		};
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	// fungsi dibawah digunakan untuk mendapatkan
	// parameter dari hash yang ada pada URL
	getHashParams = () => {
		var hashParams = {};
		var e,
			r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ((e = r.exec(q))) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
		}
		return hashParams;
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let query = this.state.value;
		let url = `https://api.spotify.com/v1/search?type=track&limit=10&q=${query}`;

		fetch(url, {
			headers: {
				Authorization: 'Bearer ' + this.state.accessToken,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				this.setState({ result: res.tracks.items });
				console.log(this.state.result);
			});
	};

	render() {
		return (
			<Container>
				<div className="item-container">
					{this.state.accessToken ? (
						<>
							<Header size="title">Selamat Datang! 😆</Header>
							<Header size="center">Mau cari lagu apa nih?</Header>
							<form className="form" onSubmit={this.handleSubmit}>
								<input
									type="text"
									value={this.state.value}
									onChange={this.handleChange}
									className="text-field"
								/>
								<input type="submit" className='submit-button'/>
							</form>
							{!this.state.result.length ? null : (
								<>
									<Header size="title">List Track</Header>
									<Table data={this.state.result} />
								</>
							)}
						</>
					) : (
						<Login />
					)}
				</div>
			</Container>
		);
	}
}

export default Home;
