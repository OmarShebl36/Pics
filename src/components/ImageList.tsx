import ImageProps, { ImageType } from '../ImageType';
import ImageShow from './ImageShow';
import './ImageList.css'

function ImageList( { images }: ImageProps) {
  const renderedImages = images.map((image: ImageType) => {
		return <ImageShow key={image.id} alt_description={image.alt_description} urls={image.urls} id={image.id} />;
	});
	return <div className='image-list'>{renderedImages}</div>;
}

export default ImageList;
