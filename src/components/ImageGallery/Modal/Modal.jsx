import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor(props) {
    super(props);
    console.log(props.imageIdx);
    this.state = {
      imageIndex: props.imageIdx,
    };
  }

  render() {
    const { images, onCloseModal } = this.props;

    return (
      <>
        <Lightbox
          mainSrc={images[this.state.imageIndex].largeImageURL}
          nextSrc={
            images[(this.state.imageIndex + 1) % images.length].largeImageURL
          }
          prevSrc={
            images[(this.state.imageIndex + images.length - 1) % images.length]
              .largeImageURL
          }
          onCloseRequest={() => onCloseModal()}
          onMovePrevRequest={() =>
            this.setState({
              imageIndex:
                (this.state.imageIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              imageIndex: (this.state.imageIndex + 1) % images.length,
            })
          }
        />
      </>
    );
  }
}

Modal.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string,
    })
  ),
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
