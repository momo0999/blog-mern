import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetail } from '../../actions/postActions';
import ErrorAlert from '../ErrorAlert';
import {
  ImageContainer,
  Img,
  PostDetail,
  Title,
  Text,
  CategoryLink,
  TextContainer,
  PrimaryLink,
  Loader,
} from '../../utils/utilsStyles.styled';

const PostScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const {
    post: { title, img, content, category, _id },
    loading,
    error,
  } = useSelector((state) => state.postDetail);
  useEffect(() => {
    if (!_id || _id !== match.params.id)
      dispatch(fetchPostDetail(match.params.id));
  }, [dispatch, match, _id]);

  return (
    <Fragment>
      <PrimaryLink to='/'>Back to all articles</PrimaryLink>
      <PostDetail>
        {loading && <Loader style={{ fontSize: '80px' }} />}
        {error && <ErrorAlert error={error} />}
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>
        <ImageContainer>
          <Img src={img} alt={title} />
        </ImageContainer>
        <TextContainer>
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
