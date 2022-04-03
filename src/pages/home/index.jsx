import React, { useState } from 'react';
import { Container, CreatePlaylist, Expired, Login } from '../../components';
import './home.css';

const Home = () => {
	const [expiredToken, setExpiredToken] = useState(false);
	const [accessToken] = useState(
		window.location.hash
			.substring(1, window.location.hash.length - 1)
			.split('&')[0]
			.split('=')[1]
	);

	return (
		<Container>
			<div className="item-container">
				{accessToken ? (
					<>
						{expiredToken ? (
							<Expired />
						) : (
							<CreatePlaylist
								setExpiredToken={setExpiredToken}
								accessToken={accessToken}
							/>
						)}
					</>
				) : (
					<Login />
				)}
			</div>
		</Container>
	);
};

export default Home;
