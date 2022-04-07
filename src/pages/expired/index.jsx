import React from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../../components';
import { removeToken, resetToken } from '../../redux/slice/token-slice';
import './expired.css';

const Expired = () => {
	const dispatch = useDispatch();

	return (
		<div className="expired-container">
			<Header size="title">Mohon Maaf! 😔</Header>
			<Header size="center">token yang kamu gunakan sudah kadaluarsa</Header>
			<Header size="center">
				Tapi jangan panik, klik tombol dibawah untuk kembali ke halaman login
			</Header>
			<div
				onClick={() => {
					window.location = '/';
					dispatch(removeToken());
				}}
				className="button"
			>
				Kembali
			</div>
		</div>
	);
};

export default Expired;
