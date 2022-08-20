import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './style';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';
import { Component } from 'react';
import Modal from './Modal'

class ImageGallery extends Component {
  state = {
    imageIdx: null,
    modalIsOpen: false,
  };

  onImageClick = imageId => {
    const imageIdx = this.props.images.findIndex(image => image.id === imageId);
    this.setState({ imageIdx, modalIsOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { images } = this.props;

    return (
      <Gallery>
        {this.state.modalIsOpen && <Modal images={images} imageIdx={this.state.imageIdx} onCloseModal={this.onCloseModal}/>}

        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              id={image.id}
              onImageClick={this.onImageClick}
              imageUrl={image.webformatURL}
            />
          );
        })}
      </Gallery>
    );
  }
}

export default ImageGallery;
