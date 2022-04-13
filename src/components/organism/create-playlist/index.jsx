import React, { useState } from 'react';
import Loading from '../../atomic/Loading';
import PlaylistForm from '../../molecules/PlaylistForm';
import Search from '../../molecules/Search';
import CardContainer from '../../molecules/CardContainer';
import './create-playlist.css';

const CreatePlaylist = () => {
	const [value, setValue] = useState('');
	const [loadingMessage, setLoadingMessage] = useState('');
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
					setSelected={setSelected}
				/>
				<Search
					setResult={setResult}
					setValue={setValue}
					value={value}
					setLoadingMessage={setLoadingMessage}
				/>
				{!result.length ? (
					loadingMessage && <Loading />
				) : (
					<CardContainer
						data={result}
						selected={selected}
						setSelected={setSelected}
					/>
				)}
			</div>
		</>
	);
};

export default CreatePlaylist;
