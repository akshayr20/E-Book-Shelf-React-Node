import React from 'react';

export interface SearchProps {}

const Search: React.SFC<SearchProps> = () => {
	return (
		<form className="search">
			<input type="text" className="search__input" placeholder="Search Books" />
		</form>
	);
};

export default Search;
