import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetToken } from '../../../redux/slice/token-slice';
import Header from '../../atomic/header';
import './search.css';

const Search = ({ setResult, setValue, value }) => {
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token.token);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
					if (typeof res.error === 'object') {
						// setExpiredToken(true);
						dispatch(resetToken(true));
					} else {
						setResult(res.tracks.items);
					}
				});
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
