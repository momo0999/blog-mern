import React from 'react';
import { ModelDiv, ModelImage } from '../utils/utilsStyles.styled';
import { motion } from 'framer-motion';

const ImageModel = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('model')) {
      setSelectedImage(null);
    }
  };
  return (
    <ModelDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClick}
      className='model'
    >
      <ModelImage
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        src={selectedImage}
        alt=''
      />
    </ModelDiv>
  );
};

export default ImageModel;
