import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetail } from '../../actions/postActions';
import { StyledCategoryLink } from '../Post.styled';
import {
  ImageContainer,
  StyledImg,
  StyledPostDetail,
  StyledTitle,
  StyledText,
} from './PostScreen.styled';

const PostScreen = ({ match }) => {
  const dispatch = useDispatch();
  const postDetail = useSelector((state) => state.postDetail);
  const { post, loading, error } = postDetail;
  useEffect(() => {
    dispatch(fetchPostDetail(match.params.id));
  }, [dispatch, match]);
  return (
    <StyledPostDetail>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <ImageContainer>
        <StyledImg src={post.img} alt='' />
      </ImageContainer>
      <div>
        <StyledTitle>{post.title}</StyledTitle>
        <StyledText>{post.content}</StyledText>
        <StyledCategoryLink to='/posts/category/:id'>
          {post.category}
        </StyledCategoryLink>
      </div>
    </StyledPostDetail>
  );
};

export default PostScreen;
