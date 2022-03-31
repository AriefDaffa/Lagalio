import React, { useState } from 'react';
import Gif from '../../components/Gif';

const Home = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	const handleChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let apiKey = process.env.REACT_APP_GIPHY_API_KEY;
		let query = searchQuery;
		let limit = 12;
		let baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${query}`;

		fetch(baseUrl)
			.then((res) => res.json())
			.then((res) => {
				setSearchResult(res.data);
				console.log(searchResult);
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => handleChange(e)}
				/>
				<input type="submit" />
			</form>

			{searchResult.map((data) => (
				<Gif url={data.images.fixed_width.url} title={data.title} />
			))}
		</>
	);
};

export default Home;
