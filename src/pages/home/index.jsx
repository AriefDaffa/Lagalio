import React from 'react';
import { Container, CreatePlaylist, Navbar } from '../../components';
import './home.css';

const Home = () => {
	return (
		<>
			<Navbar />
			<Container>
				<div className="item-container">
					<CreatePlaylist />
				</div>
			</Container>
		</>
	);
};

export default Home;
