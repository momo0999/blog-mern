import React from 'react';
import {
  ImagePhotography,
  PrimaryLink,
  ColumnWrapper,
} from '../utils/utilsStyles.styled';

const Image = ({ image: { img, _id }, setSelectedImage }) => {
  return (
    <ColumnWrapper onClick={() => setSelectedImage(img)}>
      <ImagePhotography src={img} alt={img._id} />
      <PrimaryLink to={`/images/delete/${_id}`}>Delete Image</PrimaryLink>
    </ColumnWrapper>
  );
};

export default Image;
