import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetail } from '../../actions/postActions';
import {
  ImageContainer,
  Img,
  PostDetail,
  Title,
  Text,
  CategoryLink,
} from '../../utils/utilsStyles.styled';

const PostScreen = ({ match }) => {
  const dispatch = useDispatch();
  const postDetail = useSelector((state) => state.postDetail);
  const {
    post: { title, img, content, category },
    loading,
    error,
  } = postDetail;
  useEffect(() => {
    dispatch(fetchPostDetail(match.params.id));
  }, [dispatch, match]);
  return (
    <PostDetail>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      <ImageContainer>
        <Img src={img} alt='' />
      </ImageContainer>
      <div>
        <Title>{title}</Title>
        <Text>{content}</Text>
        <CategoryLink to='/posts/category/:id'>{category}</CategoryLink>
      </div>
    </PostDetail>
  );
};

export default PostScreen;
