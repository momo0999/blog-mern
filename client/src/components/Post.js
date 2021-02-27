import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryLink, ColumnWrapper } from '../utils/utilsStyles.styled';
import {
  StyledPost,
  Img,
  Title,
  PostContent,
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
        <ColumnWrapper>
          <Title>{title}</Title>
          <CategoryLink to={`/posts/category/${category}`}>
            {category}
          </CategoryLink>
        </ColumnWrapper>
      </PostContent>
    </StyledPost>
  );
};

export default Post;
