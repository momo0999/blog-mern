import React from 'react';
import {
  StyledPost,
  Img,
  LinkTitle,
  Wrapper,
  CategoryLink,
} from './Post.styled.js';

const Post = ({ post: { title, img, category, _id } }) => {
  return (
    <StyledPost>
      <Wrapper>
        <LinkTitle to={`/post/${_id}`}>
          <Img src={img} alt={title} />

          {title}
        </LinkTitle>

        <CategoryLink to={`/posts/category/${category}`}>
          {category}
        </CategoryLink>
      </Wrapper>
    </StyledPost>
  );
};

export default Post;
