import React from 'react';
import { CustomButton } from '../../../components';
import styles from './button-section.module.css';

type Props = {};

const ButtonSection = (props: Props) => {
	return (
		<div className={styles.parentContainer}>
			<div className={styles.buttonContainer}>
				<CustomButton className={styles.buttonNext}>
					Delete Playlist
				</CustomButton>
			</div>
		</div>
	);
};

export default ButtonSection;
