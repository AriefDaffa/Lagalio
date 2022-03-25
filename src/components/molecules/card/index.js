import React from 'react';
import CardBody from '../../atomic/card-body';
import Image from '../../atomic/image';

const Card = ({ data }) => {
	return (
		<div className="card">
			<Image data={data} />
			<CardBody data={data} />
		</div>
	);
};

export default Card;
