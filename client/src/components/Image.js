import React from 'react';
import { ImagePhotography, ColumnWrapper } from '../utils/utilsStyles.styled';

const Image = ({ image: { img }, setSelectedImage }) => {
  return (
    <ColumnWrapper onClick={() => setSelectedImage(img)}>
      <ImagePhotography src={img} alt={img._id} />
    </ColumnWrapper>
  );
};

export default Image;
