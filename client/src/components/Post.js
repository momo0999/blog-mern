import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledPost,
  StyledImg,
  ReadMoreButton,
  StyledParagraph,
  StyledTitle,
  StyledPostContent,
  StyledCategoryLink,
  ImageContainer,
} from './Post.styled.js';

const Post = ({ post: { title, img, content, category, _id } }) => {
  return (
    <StyledPost>
      <StyledPostContent>
        <ImageContainer>
          <Link to={`/post/${_id}`}>
            <StyledImg src={img} alt={title} />
          </Link>
        </ImageContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledParagraph></StyledParagraph>
        <StyledCategoryLink to='/api/posts/category'>
          {category}
        </StyledCategoryLink>
      </StyledPostContent>
    </StyledPost>
  );
};

export default Post;
