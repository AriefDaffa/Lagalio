import React from 'react';
import styles from './card.module.css';

const Card = ({ data, handleSelect, selected, handleDelete }) => {
	return (
		<div className={styles.card}>
			<img src={data.album.images[0].url} alt="" className={styles.cardImage} />
			<div className={styles.flex}>
				<div>
					<div className={styles.title}>{data.name}</div>
					<div className={styles.description}>{data.artists[0].name}</div>
					<div className={styles.description}>{data.album.name}</div>
				</div>
				<div>
					{selected.includes(data.uri) ? (
						<button
							className={`${styles.cardbutton} ${styles.deselect}`}
							onClick={() => handleDelete(data.uri)}
						>
							Deselect
						</button>
					) : (
						<button
							className={`${styles.cardbutton} ${styles.select}`}
							onClick={() => handleSelect(data.uri)}
						>
							Select
						</button>
					)}
				</div>
			</div>
		</div>
		// <tr>
		// 	<td>{id + 1}</td>
		// 	<td>
		// 		<div className="title-content">
		// 			<img src={data.album.images[0].url} alt="" />
		// 			<div className="song-title">
		// 				<div>{data.name}</div>
		// 			</div>
		// 		</div>
		// 	</td>
		// 	<td>{data.artists[0].name}</td>
		// 	<td>{data.album.name}</td>
		// 	<td>{data.album.release_date}</td>
		// 	<td className="button-container">
		// 		{selected.includes(data.uri) ? (
		// 			<button className="deselect" onClick={() => handleDelete(data.uri)}>
		// 				Deselect
		// 			</button>
		// 		) : (
		// 			<button className="select" onClick={() => handleSelect(data.uri)}>
		// 				Select
		// 			</button>
		// 		)}
		// 	</td>
		// </tr>
	);
};

export default Card;
