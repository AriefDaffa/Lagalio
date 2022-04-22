import React from 'react';
import { playlistType } from '../../../Types/Playlist/playlistTypes';
import styles from './playlist-detail.module.css';

const PlaylistDetail = ({ data }: playlistType) => {
	return (
		<div className={styles.parentContainer}>
			<div className={styles.container}>
				<img src={data?.images[0].url} alt="" className={styles.image} />
				<div>
					<div className={styles.playlist}>PLAYLIST</div>
					<div className={styles.playlistTitle}>{data.name}</div>
					<div className={styles.playlistDesc}>{data.description}</div>
					<div className={styles.flexComp}>
						<div>{data.owner.display_name}</div>
						<div className={styles.dot}>•</div>
						<div>{data.tracks.total} Lagu</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlaylistDetail;
