import React from 'react';
import Header from '../../atomic/header';

const Expired = () => {
	return (
		<>
			<Header size="title">Mohon Maaf! 😔</Header>
			<Header size="center">token yang kamu gunakan sudah kadaluarsa</Header>
			<Header size="center">
				Tapi jangan panik, klik tombol dibawah untuk kembali ke halaman login
			</Header>
			<div onClick={() => (window.location = '/')} className="button">
				Kembali
			</div>
		</>
	);
};

export default Expired;
