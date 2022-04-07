import React, { useState } from 'react';
import PlaylistForm from '../../molecules/playlist-form';
import Search from '../../molecules/search';
import Table from '../../molecules/table';
import './create-playlist.css';

const CreatePlaylist = () => {
	const [value, setValue] = useState('');
	const [result, setResult] = useState([]);
	const [selected, setSelected] = useState([]);
	const [playlistData, setPlaylistData] = useState({
		title: '',
		description: '',
	});
	return (
		<>
			<div className="create-playlist-container">
				<PlaylistForm
					playlistData={playlistData}
					setPlaylistData={setPlaylistData}
					selected={selected}
				/>
				<Search setResult={setResult} setValue={setValue} value={value} />
				{!result.length ? null : (
					<Table data={result} selected={selected} setSelected={setSelected} />
				)}
			</div>
		</>
	);
};

export default CreatePlaylist;
