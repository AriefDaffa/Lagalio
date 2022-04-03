import React, { useState } from 'react';
import Header from '../../atomic/header';
import ListPlaylist from '../../molecules/list-playlist';
import PlaylistForm from '../../molecules/playlist-form';
import Search from '../../molecules/search';
import Table from '../../molecules/table';

const CreatePlaylist = ({ setExpiredToken, accessToken }) => {
	const [value, setValue] = useState('');
	const [result, setResult] = useState([]);
	const [selected, setSelected] = useState([]);
	const [playlistData, setPlaylistData] = useState({
		title: '',
		description: '',
	});
	return (
		<>
			<Search
				setExpiredToken={setExpiredToken}
				setResult={setResult}
				accessToken={accessToken}
				setValue={setValue}
				value={value}
			/>
			{!result.length ? null : (
				<>
					<Header size="title">List Track</Header>
					<Table data={result} selected={selected} setSelected={setSelected} />
				</>
			)}
			<PlaylistForm
				playlistData={playlistData}
				setPlaylistData={setPlaylistData}
				accessToken={accessToken}
				selected={selected}
			/>
			<ListPlaylist
				accessToken={accessToken}
				setExpiredToken={setExpiredToken}
			/>
		</>
	);
};

export default CreatePlaylist;
