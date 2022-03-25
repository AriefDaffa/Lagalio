import React from 'react';

const Gif = ({ gif }) => {
	return (
		<div>
			<div>{gif.title}</div>
			<img src={gif.url} alt="" />
		</div>
	);
};

export default Gif;
