import React from 'react';
import './table.css';

const Table = ({ data }) => {
	return (
		<div className="table-container">
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Artist</th>
						<th>Album</th>
						<th>Release Date</th>
					</tr>
				</thead>
				<tbody>
					{data.map((data, id) => (
						<tr key={id}>
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
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
