import './App.css';
import { Card, Header } from './components';
import data from './data/single-sample';

function App() {
	// const spotifyKey = process.env.SPOTIFY_CLIENT_ID;
	console.log(data);

	return (
		<>
			<Header title="List Albums" />
			<Card data={data} />
		</>
	);
}

export default App;
