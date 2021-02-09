import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledPost,
  Img,
  Paragraph,
  Title,
  PostContent,
  CategoryLink,
  ImageContainer,
} from './Post.styled.js';

const Post = ({ post: { title, img, category, _id } }) => {
  return (
    <StyledPost>
      <PostContent>
        <ImageContainer>
          <Link to={`/post/${_id}`}>
            <Img src={img} alt={title} />
          </Link>
        </ImageContainer>
        <Title>{title}</Title>
        <Paragraph></Paragraph>
        <CategoryLink to='/api/posts/category'>{category}</CategoryLink>
      </PostContent>
    </StyledPost>
  );
};

export default Post;
