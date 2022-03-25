import React from 'react';
import Form from '../../components/form';
import Gif from '../../components/Gif';

const Home = ({ gif }) => {
	return (
		<>
			<Gif gif={gif} />
			<img
				src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
				alt=""
			/>
			<Form />
		</>
	);
};

export default Home;
