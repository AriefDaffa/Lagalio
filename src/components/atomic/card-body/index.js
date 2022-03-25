import React from 'react';

const CardBody = ({ data }) => {
	return (
		<div className="card-body">
			<div>
				<div className="card-title">{data.album.name}</div>
				<div className="card-subtitle">{data.artists[0].name}</div>
			</div>
			<button>Select</button>
		</div>
	);
};

export default CardBody;
