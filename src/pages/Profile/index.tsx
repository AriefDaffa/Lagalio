import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Loading, Navbar } from '../../components';
import { resetToken } from '../../redux/slice/token-slice';
import { RootState } from '../../redux/store';
import { ProfileTypes } from '../../Types/Profile/ProfileTypes';
import styles from './profile.module.css';

const Profile = () => {
	const [profile, setProfile] = useState<ProfileTypes>();
	const dispatch = useDispatch();
	const token = useSelector((state: RootState) => state.token.token);
	useEffect(() => {
		const request = async () => {
			const url = `https://api.spotify.com/v1`;
			const header = {
				Authorization: 'Bearer ' + token,
			};
			await fetch(`${url}/me`, {
				headers: header,
			})
				.then((res) => res.json())
				.then((res) => {
					if (typeof res.error === 'object') {
						dispatch(resetToken(true));
					} else {
						setProfile(res);
					}
				})
				.catch((err) => console.error(err));
		};
		request();
	}, []);

	console.log(profile);

	return (
		<>
			<Navbar />
			<div
				style={{
					background:
						'linear-gradient(179.92deg, #273053 0.07%, #242035 134.98%)',
				}}
			>
				<Container>
					<div className={styles.flex}>
						{typeof profile === 'undefined' ? (
							<Loading />
						) : (
							<div>
								<img
									className={styles.images}
									src={profile.images[0].url}
									alt=""
								/>
								<Header size="title">{profile.display_name}</Header>
								<Header size="center">{profile.email}</Header>
								<Header size="center">
									{profile.followers.total} Followers
								</Header>
							</div>
						)}
					</div>
				</Container>
			</div>
		</>
	);
};

export default Profile;
