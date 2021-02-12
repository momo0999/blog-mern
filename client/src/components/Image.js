import React from 'react';
import { ImagePhotography } from '../utils/utilsStyles.styled';

const Image = ({ image: { img, _id }, setSelectedImage }) => {
  return (
    <div onClick={() => setSelectedImage(img)}>
      <ImagePhotography src={img} alt={img._id} />
    </div>
  );
};

export default Image;
