export type playlistType = {
	data: {
		name: string;
		description: string;
		owner: {
			display_name: string;
		};
		tracks: {
			total: number;
		};
		images: [
			{
				url: string;
			}
		];
	};
};