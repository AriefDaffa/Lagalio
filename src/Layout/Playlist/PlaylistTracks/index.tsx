import React from 'react';
import { TracksTypes } from '../../../Types/Playlist/TracksTypes';
import styles from './playlist-tracks.module.css';

type Props = {
	data: {
		tracks: {
			items: [];
		};
	};
};

const PlaylistTracks = ({ data }: Props) => {
	console.log(data);
	return (
		<div className={styles.glass}>
			<div className={styles.parentContainer}>
				<div className={styles.tableContainer}>
					<table className={styles.table}>
						<thead>
							<tr className={styles.tr}>
								<th className={styles.th}>#</th>
								<th>Title</th>
								<th>Artist</th>
								<th>Album</th>
								<th>Release Date</th>
							</tr>
						</thead>
						<tbody>
							{data.tracks.items.map((data: TracksTypes, id: number) => (
								<tr key={id}>
									<td>{id + 1}</td>
									<td>
										<div className={styles.titleContent}>
											<img
												className={styles.titleImg}
												src={data.track.album.images[0].url}
												alt=""
											/>
											<div className={styles.songTitle}>
												<div>{data.track.name}</div>
											</div>
										</div>
									</td>
									<td>{data.track.album.artists[0].name}</td>
									<td>{data.track.album.name}</td>
									<td>{data.track.album.release_date}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default PlaylistTracks;
