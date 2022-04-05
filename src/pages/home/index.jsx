import React from 'react';
import { useSelector } from 'react-redux';
import { Container, CreatePlaylist, Expired, Login } from '../../components';
import './home.css';

const Home = () => {
	//get token value
	const value = useSelector((state) => state.token);
	console.log(value);

	// useEffect(() => {
	// 	// remove token pada url
	// 	window.history.replaceState({}, document.title, '/');
	// }, []);

	return (
		<Container>
			<div className="item-container">
				{value.token ? (
					<>{value.expiredToken ? <Expired /> : <CreatePlaylist />}</>
				) : (
					<Login />
				)}
			</div>
		</Container>
	);
};

export default Home;
