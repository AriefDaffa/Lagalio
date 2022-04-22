import React from 'react';
import styles from '../../../pages/ListPlaylist/list-playlist.module.css';
import { useHistory } from 'react-router-dom';
import { PlaylistCardTypes } from '../../../Types/ListPlaylist/PlaylistCardTypes';

const PlaylistCard = ({
	id,
	images,
	name,
	description,
	owner,
	tracks,
}: PlaylistCardTypes) => {
	const history = useHistory();
	return (
		<div
			key={id}
			className={styles.cardContainer}
			onClick={() => history.push(`/playlist/${id}`)}
		>
			<div className={styles.playlistCard}>
				<img src={images[0].url} alt="" className={styles.cardImage} />
				<div className={styles.cardBody}>
					<div className={styles.cardHeader}>Playlist</div>
					<div className={styles.cardTitle} data-testid="custom-element">
						{name}
					</div>
					<div className={styles.cardContent}>{description}</div>
					<div className={styles.flex}>
						<div className={styles.author}>{owner.display_name}</div>
						<div className={styles.dot}>•</div>
						<div className={styles.tracks}>{tracks.total} Tracks</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlaylistCard;
