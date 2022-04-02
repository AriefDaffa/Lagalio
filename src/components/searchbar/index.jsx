import React from 'react';

const SearchBar = ({ searchQuery, handleChange }) => {
	return (
		<input type="text" value={searchQuery} onChange={(e) => handleChange(e)} />
	);
};

export default SearchBar;
