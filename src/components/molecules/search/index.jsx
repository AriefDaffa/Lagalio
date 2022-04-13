import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetToken } from '../../../redux/slice/token-slice';
import CustomButton from '../../atomic/CustomButton';
import CustomInput from '../../atomic/CustomInput';
import Header from '../../atomic/Header';
import styles from './search.module.css';

const Search = ({ setResult, setValue, value, setLoadingMessage }) => {
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token.token);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.length > 0) {
			setLoadingMessage('Loading...');
			let url = `https://api.spotify.com/v1/search?type=track&limit=10&q=${value}`;

			fetch(url, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setMessage('');
					setLoadingMessage('');
					if (typeof res.error === 'object') {
						dispatch(resetToken(true));
					} else {
						setResult(res.tracks.items);
					}
				})
				.catch(() => setLoadingMessage(''));
		} else {
			setMessage('⚠️ kolom tidak boleh kosong');
		}
	};
	return (
		<div className={styles.searchContainer}>
			<Header size="center">
				Selanjutnya, cari track yang mau kamu masukkan kedalam playlist
			</Header>
			<Header size="title">Search Tracks</Header>
			<form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
				<div className={styles.searchInput}>
					<CustomInput
						id="title"
						type="text"
						label="Search Tracks"
						value={value}
						onChange={(e) => handleChange(e)}
						error={message.includes('kosong') ? true : false}
					/>
				</div>
				<CustomButton type="submit" className={styles.buttonSearch}>
					Search
				</CustomButton>
			</form>
			{message && <div className={styles.error}>{message}</div>}
		</div>
	);
};

export default Search;
