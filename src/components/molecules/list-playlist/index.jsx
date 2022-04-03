import React, { useEffect, useState } from 'react';
import Header from '../../atomic/header';
import './list-playlist.css';

const ListPlaylist = ({ accessToken, setExpiredToken }) => {
	const [playlist, setPlaylist] = useState([]);

	useEffect(() => {
		let url = `https://api.spotify.com/v1`;
		const header = {
			Authorization: 'Bearer ' + accessToken,
		};
		fetch(`${url}/me/playlists`, {
			headers: header,
		})
			.then((res) => res.json())
			.then((res) => {
				if (typeof res.error === 'object') {
					setExpiredToken(true);
				} else {
					setPlaylist(res);
				}
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="list-playlist-container">
			<Header size="center">Lihat daftar playlist yang telah kamu buat</Header>
			<Header size="title">List Playlist</Header>
			{typeof playlist.items !== 'undefined'
				? playlist.items.map((data) => (
						<div key={data.id} className="card-container">
							<div className="playlist-card">
								<img src={data.images[0].url} alt="" className="card-image" />
								<div className="card-body">
									<div className="card-header">Playlist</div>
									<div className="card-title">{data.name}</div>
									<div className="card-content">{data.description}</div>
									<div className="flex">
										<div className="author">{data.owner.display_name}</div>
										<div className="dot">•</div>
										<div className="tracks">{data.tracks.total} Tracks</div>
									</div>
								</div>
							</div>
						</div>
				  ))
				: null}
		</div>
	);
};

export default ListPlaylist;
