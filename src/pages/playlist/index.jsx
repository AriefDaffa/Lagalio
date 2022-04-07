import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Navbar } from '../../components';
import { resetToken } from '../../redux/slice/token-slice';
import './list-playlist.css';

const ListPlaylist = () => {
	const [playlist, setPlaylist] = useState([]);
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token.token);

	useEffect(() => {
		let url = `https://api.spotify.com/v1`;
		const header = {
			Authorization: 'Bearer ' + token,
		};
		fetch(`${url}/me/playlists`, {
			headers: header,
		})
			.then((res) => res.json())
			.then((res) => {
				if (typeof res.error === 'object') {
					// setExpiredToken(true);
					dispatch(resetToken(true));
				} else {
					setPlaylist(res);
				}
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Navbar />
			<Container>
				<div className="list-playlist-container">
					<Header size="center">
						Lihat daftar playlist yang telah kamu buat
					</Header>
					<Header size="title">List Playlist</Header>
					{typeof playlist.items !== 'undefined'
						? playlist.items.map((data) => (
								<div key={data.id} className="card-container">
									<div className="playlist-card">
										<img
											src={data.images[0].url}
											alt=""
											className="card-image"
										/>
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
			</Container>
		</>
	);
};

export default ListPlaylist;
