import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchBar } from '../../components';
import { insertResult } from '../../redux/slice/result-slice';
import Gif from '../../components/Gif';
import { Button } from '@mui/material';
import './home.css';
import { RootState } from '../../redux/store';

type dataGif = {
	images:{
		fixed_width:{
			url: string;
		}
	},
	title: string;
	id: string;
}

const Home = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const value = useSelector((state: RootState) => state.searchResult.result);
	const dispatch = useDispatch();
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
		const query = searchQuery;
		const limit = 12;
		const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${query}`;

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
				<Button type="submit" variant="contained">
					Submit
				</Button>
			</form>
			<Link to="/trending" className="link">
				{/* <div className="link-container">Lihat halaman Trending</div> */}
				<Button variant="outlined">Lihat halaman Trending</Button>
			</Link>

			{value.map((data: dataGif) => (
				<Gif
					url={data.images.fixed_width.url}
					title={data.title}
					key={data.id}
				/>
			))}
		</>
	);
};

export default Home;
