import { ImageType } from '../ImageType';

function ImageShow({ alt_description, urls}: ImageType) {
	return (
		<div>
			<img src={urls.small} alt={alt_description} />
		</div>
	);
}

export default ImageShow;
