import React from 'react';
import Input from '@mui/material/Input';

const SearchBar = ({ searchQuery, handleChange }) => {
	return (
		// <input type="text" value={searchQuery} onChange={(e) => handleChange(e)} />
		<Input
			placeholder="Search gifs"
			type="text"
			value={searchQuery}
			onChange={(e) => handleChange(e)}
			style={{ color: 'white' }}
		/>
	);
};

export default SearchBar;
