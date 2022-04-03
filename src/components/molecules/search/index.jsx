import React, { useState } from 'react';
import Header from '../../atomic/header';
import './search.css';

const Search = ({
	setExpiredToken,
	setResult,
	accessToken,
	setValue,
	value,
}) => {
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.length > 0) {
			let url = `https://api.spotify.com/v1/search?type=track&limit=10&q=${value}`;

			fetch(url, {
				headers: {
					Authorization: 'Bearer ' + accessToken,
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setMessage('');
					if (typeof res.error === 'object') {
						setExpiredToken(true);
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
			<Header size="title">Selamat Datang!</Header>
			<Header size="center">Bikin playlist yuk!</Header>
			<Header size="center">
				Pertama, pilih lagu yang kamu inginkan menggunakan fitur search dibawah
				🔎
			</Header>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					value={value}
					onChange={(e) => handleChange(e)}
					className="text-field"
				/>
				<input type="submit" className="submit-button" value="Search" />
			</form>
			{message && <div className="error">{message}</div>}
		</div>
	);
};

export default Search;
