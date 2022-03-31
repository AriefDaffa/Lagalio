import React from 'react';

const TableBody = ({ data, id, handleSelect, selected, handleDelete }) => {
	return (
		<tr>
			<td>{id + 1}</td>
			<td>
				<div className="title-content">
					<img src={data.album.images[0].url} alt="" />
					<div className="song-title">
						<div>{data.name}</div>
					</div>
				</div>
			</td>
			<td>{data.artists[0].name}</td>
			<td>{data.album.name}</td>
			<td>{data.album.release_date}</td>
			<td className="button-container">
				{selected.includes(data.uri) ? (
					<button className="deselect" onClick={() => handleDelete(data.uri)}>
						Deselect
					</button>
				) : (
					<button className="select" onClick={() => handleSelect(data.uri)}>
						Select
					</button>
				)}
			</td>
		</tr>
	);
};

export default TableBody;
