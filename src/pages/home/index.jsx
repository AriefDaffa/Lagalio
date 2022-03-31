import React, { useState } from 'react';
import { Container, Header, Login, Table } from '../../components';
import './home.css';

const Home = () => {
	const [value, setValue] = useState('');
	const [expiredToken, setExpiredToken] = useState(false);
	const [accessToken] = useState(
		window.location.hash
			.substring(1, window.location.hash.length - 1)
			.split('&')[0]
			.split('=')[1]
	);
	const [result, setResult] = useState([]);

	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let url = `https://api.spotify.com/v1/search?type=track&limit=10&q=${value}`;

		fetch(url, {
			headers: {
				Authorization: 'Bearer ' + accessToken,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				if (typeof res.error === 'object') {
					setExpiredToken(true);
				} else {
					setResult(res.tracks.items);
				}
			});
	};

	return (
		<Container>
			<div className="item-container">
				{accessToken ? (
					<>
						{expiredToken ? (
							<>
								<Header size="title">Mohon Maaf! 😔</Header>
								<Header size="center">
									token yang kamu gunakan sudah kadaluarsa
								</Header>
								<Header size="center">
									Tapi jangan panik, klik tombol dibawah untuk kembali ke
									halaman login
								</Header>
								<div onClick={() => (window.location = '/')} className="button">
									Kembali
								</div>
							</>
						) : (
							<>
								<Header size="title">Selamat Datang! 😆</Header>
								<Header size="center">Mau cari lagu apa nih?</Header>
								<form className="form" onSubmit={(e) => handleSubmit(e)}>
									<input
										type="text"
										value={value}
										onChange={(e) => handleChange(e)}
										className="text-field"
									/>
									<input type="submit" className="submit-button" />
								</form>
							</>
						)}
						{!result.length ? null : (
							<>
								<Header size="title">List Track</Header>
								<Table data={result} />
							</>
						)}
						{/* {expiredToken ? (
							<>
								<Header size="center">
									Mohon maaf, token yang kamu gunakan sudah kadaluarsa 😔
								</Header>
								<Header size="center">
									Tapi jangan panik, klik{' '}
									<a href="/" className="anchor">
										disini
									</a>{' '}
									untuk kembali ke halaman login
								</Header>
							</>
						) : null} */}
					</>
				) : (
					<Login />
				)}
			</div>
		</Container>
	);
};

export default Home;
