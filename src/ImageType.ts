export interface ImageType {
	id: string;
	alt_description: string;
	urls: {
		full: string;
		row: string;
		small: string;
		small_s3: string;
		thumb: string;
		regular: string;
	};
}

export default interface ImageProps {
	images: ImageType[];
}
