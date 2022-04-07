import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from '../../components';
import { insertResult } from '../../redux/slice/result-slice';
import Gif from '../../components/Gif';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const value = useSelector((state) => state.searchResult.result);
	const dispatch = useDispatch();
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
				dispatch(insertResult(res.data));
			});
	};

	return (
		<>
			<div className="title">Search Gifs</div>
			<form onSubmit={handleSubmit}>
				<SearchBar searchQuery={searchQuery} handleChange={handleChange} />
				<input type="submit" />
			</form>
			<Link to="/trending" className="link">
				<div className="link-container">Lihat halaman Trending</div>
			</Link>

			{value.map((data) => (
				<Gif url={data.images.fixed_width.url} title={data.title} />
			))}
		</>
	);
};

export default Home;
