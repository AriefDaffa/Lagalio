import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Loading, Navbar } from '../../components';
import { PlaylistCard } from '../../Layout/ListPlaylist';
import { resetToken } from '../../redux/slice/token-slice';
import styles from './list-playlist.module.css';

const ListPlaylist = () => {
	const [playlist, setPlaylist] = useState([]);
	// const [loading, setLoading] = useState('');
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token.token);

	useEffect(() => {
		const url = `https://api.spotify.com/v1`;
		const header = {
			Authorization: 'Bearer ' + token,
		};
		fetch(`${url}/me/playlists`, {
			headers: header,
		})
			.then((res) => res.json())
			.then((res) => {
				if (typeof res.error === 'object') {
					dispatch(resetToken(true));
				} else {
					setPlaylist(res);
				}
			})
			.catch((err) => console.error(err));
	}, []);

	console.log(playlist.items);

	return (
		<>
			<Navbar />
			<Container>
				<div className={styles.listPlaylistContainer}>
					<Header size="title">List Playlist</Header>
					<Header size="center">
						Klik card dibawah untuk melihat detail playlist
					</Header>
					{typeof playlist.items !== 'undefined' ? (
						<div className={styles.gridContainer}>
							{playlist.items.map((data) => (
								<PlaylistCard
									key={data.id}
									id={data.id}
									images={data.images}
									name={data.name}
									description={data.description}
									owner={data.owner}
									tracks={data.tracks}
								/>
							))}
						</div>
					) : (
						<div className={styles.loadingContainer}>
							<Loading />
						</div>
					)}
				</div>
			</Container>
		</>
	);
};

export default ListPlaylist;
