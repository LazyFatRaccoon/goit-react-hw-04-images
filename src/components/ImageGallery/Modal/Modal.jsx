import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Modal({images, imageIdx, onCloseModal}) {
 
    const [imageIndex, setImageIndex] = useState(imageIdx)
    
    return (
      <>
        <Lightbox
          mainSrc={images[imageIndex].largeImageURL}
          nextSrc={
            images[(imageIndex + 1) % images.length].largeImageURL
          }
          prevSrc={
            images[(imageIndex + images.length - 1) % images.length]
              .largeImageURL
          }
          onCloseRequest={() => onCloseModal()}
          onMovePrevRequest={() =>
            setImageIndex( s => 
                (s + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setImageIndex( s => 
              (s + 1) % images.length
            )
          }
        />
      </>
    );
  }


Modal.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string,
    })
  ),
  imageIdx: PropTypes.number.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
