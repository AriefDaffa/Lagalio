import './App.css';
import { Card, CardSingle, Header } from './components';
import data from './data/all-sample';
import dataSingle from './data/single-sample';

function App() {
	// const spotifyKey = process.env.SPOTIFY_CLIENT_ID;
	// console.log(data);

	return (
		<>
			<Header title="Album" />
			<CardSingle data={dataSingle} />
			<Header title="List Tracks" />
			{data.map((data, id) => (
				<Card data={data} key={id} />
			))}
		</>
	);
}

export default App;
