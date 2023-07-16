import React, { FormEvent, useState } from 'react';
import './SearchBar.css'

interface SearchBarProps {
	onSubmit: (term: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {
	const [term, setTerm] = useState('');

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();

		onSubmit(term);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTerm(event.target.value);
	};

	return (
		<div className='search-bar'>
			<form onSubmit={handleFormSubmit}>
				<label>Enter Search Term</label>
				<input value={term} onChange={handleChange} placeholder='Enter the term to be searched...' />
			</form>
		</div>
	);
}

export default SearchBar;
