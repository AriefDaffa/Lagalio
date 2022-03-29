import React from 'react';
import Gif from '../../components/Gif';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchQuery: '', searchResult: [] };

		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		this.setState({ searchQuery: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let apiKey = process.env.REACT_APP_GIPHY_API_KEY;
		let query = this.state.searchQuery;
		let limit = 12;
		let baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${query}`;

		fetch(baseUrl)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ searchResult: res.data });
				console.log(this.state.searchResult);
			});
	};

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.searchQuery}
						onChange={this.handleChange}
					/>
					<input type="submit" />
				</form>

				{this.state.searchResult.map((data) => (
					<Gif url={data.images.fixed_width.url} title={data.title} />
				))}
			</>
		);
	}
}

export default Home;
