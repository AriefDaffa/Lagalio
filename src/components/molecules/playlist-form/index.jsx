import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../atomic/header';
import './playlist-form.css';

const PlaylistForm = ({ playlistData, setPlaylistData, selected, setSelected }) => {
	const [message, setMessage] = useState('');
	const [buttonLoading, setButtonLoading] = useState(false);

	const token = useSelector((state) => state.token.token);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setPlaylistData({
			...playlistData,
			[id]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (playlistData.title.length > 10) {
			if (selected.length) {
				setButtonLoading(true);
				let url = `https://api.spotify.com/v1`;
				const header = {
					Authorization: 'Bearer ' + token,
				};

				const result = fetch(`${url}/me`, {
					headers: header,
				})
					.then((res) => res.json())
					.then((res) => {
						return fetch(`${url}/users/${res.id}/playlists`, {
							method: 'POST',
							headers: header,
							body: JSON.stringify({
								name: playlistData.title,
								description: playlistData.description,
								public: false,
							}),
						});
					})
					.then((response) => response.json());

				result
					.then((res) => {
						return fetch(`${url}/playlists/${res.id}/tracks`, {
							method: 'POST',
							headers: header,
							body: JSON.stringify({
								uris: selected,
							}),
						});
					})
					.then((res) => res.json())
					.then((res) => {
						console.log(res);
						setSelected([]);
						setMessage('Playlist berhasil terbuat!');
						setButtonLoading(false);
						
					});
			} else {
				setMessage('⚠️ Belum ada lagu yang terpilih');
			}
		} else {
			setMessage('⚠️ Panjang title kurang dari 10 karakter');
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className="forms">
			<Header size="title">Create Playlist</Header>
			<Header size="center">
				masukkan data playlist yang mau kamu buat dibawah
			</Header>
			<div className="playlist-form">
				<div className="label-input-container">
					{/* <Header size="title">Create Playlist</Header> */}
					<label htmlFor="title">Title </label>
					<input
						id="title"
						type="text"
						className="input"
						placeholder="Insert Title"
						value={playlistData.title}
						onChange={(e) => handleChange(e)}
					/>
					<div className="minimum">*Minimal 10 karakter</div>
					<label htmlFor="description">Description </label>
					<textarea
						id="description"
						type="text"
						placeholder="Insert Description"
						value={playlistData.description}
						className="input description"
						onChange={(e) => handleChange(e)}
					/>
					<input
						type="submit"
						className="submit-playlist"
						disabled={buttonLoading ? true : false}
						value={buttonLoading ? 'Loading...' : 'Submit'}
					/>
					{message && (
						<div
							className={
								message === 'Playlist berhasil terbuat!'
									? 'success-message'
									: 'error-message'
							}
						>
							{message}
						</div>
					)}
				</div>
			</div>
		</form>
	);
};

export default PlaylistForm;
