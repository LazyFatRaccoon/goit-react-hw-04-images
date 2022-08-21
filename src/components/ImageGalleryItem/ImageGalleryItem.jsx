import { Li, Img } from './style';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, imageUrl, onImageClick }) => {
  return (
    <Li className="gallery-item">
      <Img
        loading="lazy"
        src={imageUrl}
        onClick={() => onImageClick(id)}
        alt=""
      />
    </Li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
