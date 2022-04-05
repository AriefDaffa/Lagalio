import React from 'react';
import { useDispatch } from 'react-redux';
import { resetToken } from '../../../redux/slice/token-slice';
import Header from '../../atomic/header';

const Expired = () => {
	const dispatch = useDispatch();
	return (
		<>
			<Header size="title">Mohon Maaf! 😔</Header>
			<Header size="center">token yang kamu gunakan sudah kadaluarsa</Header>
			<Header size="center">
				Tapi jangan panik, klik tombol dibawah untuk kembali ke halaman login
			</Header>
			<div
				onClick={() => {
					window.location = '/';
					dispatch(resetToken(false));
				}}
				className="button"
			>
				Kembali
			</div>
		</>
	);
};

export default Expired;
