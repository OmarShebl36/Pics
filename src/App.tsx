import { useState } from 'react';

import searchImage from './api';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import { ImageType } from './ImageType';

function App() {
	const [images, setImages] = useState<ImageType[]>([]);

	const handleSubmit = async (term: string) => {
		const results: ImageType[] = await searchImage(term);

		setImages(results);
	};
	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
			<ImageList images={images} />
		</div>
	);
}

export default App;
