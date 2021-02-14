import React from 'react';
import { CategoryLink, RowWrapper } from '../utils/utilsStyles.styled';

const CategoriesImageLinks = ({ images }) => {
  const allCategories = [
    'all',
    ...new Set(images.map((image) => image.category)),
  ];

  return (
    <RowWrapper>
      {allCategories.map((category, index) => {
        return (
          <CategoryLink
            key={index}
            to={
              category === 'all'
                ? '/photography'
                : `/photography/category/${category}`
            }
          >
            {category}
          </CategoryLink>
        );
      })}
    </RowWrapper>
  );
};

export default CategoriesImageLinks;
