import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetToken } from '../../../redux/slice/token-slice';
import Header from '../../atomic/header';
import './search.css';

const Search = ({ setResult, setValue, value, setLoadingMessage }) => {
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token.token);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoadingMessage('Loading...');
		if (value.length > 0) {
			let url = `https://api.spotify.com/v1/search?type=track&limit=10&q=${value}`;

			fetch(url, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setMessage('');
					setLoadingMessage('');
					if (typeof res.error === 'object') {
						dispatch(resetToken(true));
					} else {
						setResult(res.tracks.items);
					}
				})
				.catch(() => setLoadingMessage(''));
		} else {
			setMessage('⚠️ kolom tidak boleh kosong');
		}
	};
	return (
		<div className="search-container">
			<Header size="center">
				Selanjutnya, cari track yang mau kamu masukkan kedalam playlist
			</Header>
			<Header size="title">Search Tracks</Header>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					value={value}
					onChange={(e) => handleChange(e)}
					className="text-field"
					placeholder="Search Tracks"
				/>
				<input type="submit" className="submit-button" value="Search" />
			</form>
			{message && <div className="error">{message}</div>}
		</div>
	);
};

export default Search;
