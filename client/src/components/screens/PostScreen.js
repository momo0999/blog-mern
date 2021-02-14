import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetail } from '../../actions/postActions';
import {
  ImageContainer,
  Img,
  PostDetail,
  Title,
  Text,
  CategoryLink,
  TextContainer,
  PrimaryLink,
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
    <Fragment>
      <PrimaryLink to='/'>Back to all articles</PrimaryLink>
      <PostDetail>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}

        <ImageContainer>
          <Img src={img} alt='' />
        </ImageContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{content}</Text>
        </TextContainer>
        <CategoryLink to={`/posts/category/${category}`}>
          {category}
        </CategoryLink>
      </PostDetail>
    </Fragment>
  );
};

export default PostScreen;
