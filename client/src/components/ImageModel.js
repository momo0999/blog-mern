import React from 'react';
import { ModelDiv, ModelImage } from '../utils/utilsStyles.styled';

const ImageModel = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('model')) {
      setSelectedImage(null);
    }
  };
  return (
    <ModelDiv onClick={handleClick} className='model'>
      <ModelImage src={selectedImage} alt='' />
    </ModelDiv>
  );
};

export default ImageModel;
