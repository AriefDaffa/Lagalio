import React from 'react';

const Gif = ({ url, title }) => {
	return (
		<div style={{ padding: '16px 0' }}>
			<div>{title}</div>
			<img src={url} alt="" />
		</div>
	);
};

export default Gif;
