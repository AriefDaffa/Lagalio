import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Loading, Navbar } from '../../components';
import { resetToken } from '../../redux/slice/token-slice';
import { PlaylistDetail, PlaylistTracks } from '../../Layout/Playlist';

const index = () => {
	let { id } = useParams();
	const [data, setData] = useState({});
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token.token);

	useEffect(() => {
		const request = async () => {
			const url = `https://api.spotify.com/v1`;
			const header = {
				Authorization: 'Bearer ' + token,
			};
			await fetch(`${url}/playlists/${id}`, {
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
		};
		request();
	}, []);

	return (
		<>
			<Navbar />
			{typeof data.images === 'undefined' ? (
				<div
					style={{
						height: '100vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						background:
							'linear-gradient(179.92deg, #273053 0.07%, #242035 134.98%)',
					}}
				>
					<Loading />
				</div>
			) : (
				<div
					style={{
						minHeight: '100vh',
						background:
							'linear-gradient(179.92deg, #273053 0.07%, #242035 134.98%)',
					}}
				>
					<PlaylistDetail data={data} />
					<PlaylistTracks data={data} />
					{/* <ButtonSection /> */}
				</div>
			)}
		</>
	);
};

export default index;
