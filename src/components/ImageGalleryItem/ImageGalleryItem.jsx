import { Li, Img } from './style'

const ImageGalleryItem = ({id, imageUrl, onImageClick}) => {
    return <Li className="gallery-item">
  <Img loading="lazy" src={imageUrl} onClick={()=>onImageClick(id)} alt="" />
</Li>
}

export default ImageGalleryItem