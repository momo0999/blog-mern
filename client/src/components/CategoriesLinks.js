import React from 'react';
import { CategoryLink, RowWrapper } from '../utils/utilsStyles.styled';

const CategoriesLinks = ({ posts }) => {
  const allCategories = ['all', ...new Set(posts.map((post) => post.category))];

  return (
    <RowWrapper>
      {allCategories.map((category, index) => {
        return (
          <CategoryLink
            key={index}
            to={category === 'all' ? '/' : `/posts/category/${category}`}
          >
            {category}
          </CategoryLink>
        );
      })}
    </RowWrapper>
  );
};

export default CategoriesLinks;
