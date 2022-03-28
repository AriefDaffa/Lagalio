import React from 'react';
import Image from '../../atomic/image';

const CardSingle = ({ data }) => {
	return (
		<div className="card">
			<Image data={data} />
			<div className="card-body">
				<div>
					<div className="card-title">{data.album.name}</div>
					<div className="card-subtitle">{data.artists[0].name}</div>
				</div>
				<button>Select</button>
			</div>
		</div>
	);
};

export default CardSingle;
