import { rest } from 'msw';
import { playlistDetails } from './json/playlistDetails';
import { playlistResult } from './json/playlistResult';
import { profile } from './json/profile';

export const handlers = [
	rest.get('https://api.spotify.com/v1/me/playlists', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(playlistResult));
	}),
	rest.get(
		'https://api.spotify.com/v1/playlists/1fi2yMImGzmZn2bHhJvL0E',
		(req, res, ctx) => {
			return res(ctx.status(200), ctx.json(playlistDetails));
		}
	),
	rest.get('https://api.spotify.com/v1/me', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(profile));
	}),
];
