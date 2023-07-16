import axios from 'axios';

const searchImage = async (term: string) => {
	const response = await axios
		.get('https://api.unsplash.com/search/photos', {
			headers: {
				Authorization: 'Client-ID h4_Ls3_NAM9Zfu5g8UWr449uKyumEmcwZrtNMmVTCIs',
			},
			params: {
				query: term,
			},
		})
	return response.data.results;
};

export default searchImage;
