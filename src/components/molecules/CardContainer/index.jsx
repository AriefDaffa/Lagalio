import React from 'react';
import Header from '../../atomic/Header';
import Card from '../../atomic/Card';
import styles from './card-container.module.css';

const CardContainer = ({ data, selected, setSelected }) => {
	const handleSelect = (uri) => {
		setSelected([...selected, uri]);
	};

	const handleDelete = (uri) => {
		setSelected(selected.filter((item) => item !== uri));
	};

	return (
		<div className={styles.cardContainer}>
			<Header size="title">List Track</Header>
			<div className={styles.cardGrid}>
				{data.map((data, id) => (
					<Card
						data={data}
						id={id}
						key={id}
						handleSelect={handleSelect}
						handleDelete={handleDelete}
						selected={selected}
					/>
				))}
			</div>
		</div>
	);
};

export default CardContainer;
