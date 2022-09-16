import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './style';
import { useState, useLayoutEffect, useRef } from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';

function ImageGallery({images}) {
  const [imageIdx, setImageIdx] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onImageClick = imageId => {
    const imageIdx = images.findIndex(image => image.id === imageId);
    setImageIdx(imageIdx);
    setModalIsOpen(true);
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    console.log(1);
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, [images]);

  return (
    <Gallery>
      {modalIsOpen && (
        <Modal
          images={images}
          imageIdx={imageIdx}
          onCloseModal={onCloseModal}
        />
      )}

      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            onImageClick={onImageClick}
            imageUrl={image.webformatURL}
          />
        );
      })}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
