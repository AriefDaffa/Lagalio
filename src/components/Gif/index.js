import React from 'react';

const Gif = ({ gif }) => {
	return (
		<div style={{ padding: '16px 0' }}>
			<div>{gif.title}</div>
			<img src={gif.url} alt="" />
		</div>
	);
};

export default Gif;
