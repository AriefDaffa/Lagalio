import React from 'react';

const Image = ({ data }) => {
	return (
		<div className="card-image">
			<img className="image" src={data.album.images[0].url} alt="" />
		</div>
	);
};

export default Image;
