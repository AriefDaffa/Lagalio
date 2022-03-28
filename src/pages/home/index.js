import React from 'react';
// import Form from '../../components/form';
import Gif from '../../components/Gif';
import { data } from '../../data/data';

const Home = () => {
	return (
		<>
			{/* <img
				src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
				alt=""
				/>
			<Form /> */}

			{data
				.filter((elements) => elements.rating === 'g')
				.map((data) => (
					<Gif gif={data} key={data.id} />
				))}
		</>
	);
};

export default Home;
