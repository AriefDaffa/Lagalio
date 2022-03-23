import './App.css';
import data from './data/single-sample';

function App() {
	// const spotifyKey = process.env.SPOTIFY_CLIENT_ID;
	console.log(data);

	return (
		<>
			<h1 class="title">List Albums</h1>
			<div className="card">
				<div className="card-image">
					<img className="image" src={data.album.images[0].url} alt="" />
				</div>
				<div className="card-body">
					<div>
						<div className="card-title">{data.album.name}</div>
						<div className="card-subtitle">{data.artists[0].name}</div>
					</div>
					<button>Select</button>
				</div>
			</div>
		</>
	);
}

export default App;
