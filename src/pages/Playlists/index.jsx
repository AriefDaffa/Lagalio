import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { URLSearchParams } from 'url';
import { Container, Navbar } from '../../components';
import { resetToken } from '../../redux/slice/token-slice';
import { RootState } from '../../redux/store';
import { PlaylistDetail } from './Layout';
import PlaylistTracks from './Layout/PlaylistTracks';

const index = () => {
	let { id } = URLSearchParams();
	const [data, setData] = useState({});
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token.token);

	useEffect(() => {
		const url = `https://api.spotify.com/v1`;
		const header = {
			Authorization: 'Bearer ' + token,
		};
		fetch(`${url}/playlists/${id}`, {
			headers: header,
		})
			.then((res) => res.json())
			.then((res) => {
				if (typeof res.error === 'object') {
					dispatch(resetToken(true));
				} else {
					setData(res);
				}
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<Navbar />
			<Container>
				<PlaylistDetail data={data} />
				<PlaylistTracks />
			</Container>
		</>
	);
};

export default index;
