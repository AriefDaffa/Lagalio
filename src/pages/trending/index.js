import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Gif from '../../components/Gif';
import { insertTrendingResult } from '../../redux/slice/result-slice';
import './trending.css';

const Trending = () => {
	const result = useSelector((state) => state.searchResult.trending);
	const dispatch = useDispatch();
	useEffect(() => {
		const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
		const limit = 12;
		const baseUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`;

		fetch(baseUrl)
			.then((res) => res.json())
			.then((res) => {
				dispatch(insertTrendingResult(res.data));
				console.log(result);
			});
	}, []);

	return (
		<div>
			<div className="title">Halaman Trending</div>
			<Link to="/" className="link">
				<div className="link-container">Kembali ke Homepage</div>
			</Link>
			{result.map((data) => (
				<Gif
					url={data.images.fixed_width.url}
					title={data.title}
					key={data.id}
				/>
			))}
		</div>
	);
};

export default Trending;
