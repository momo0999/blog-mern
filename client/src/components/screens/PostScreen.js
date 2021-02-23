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

const PostScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const {
    post: { title, img, content, category },
    loading,
    error,
  } = useSelector((state) => state.postDetail);
  useEffect(() => {
    dispatch(fetchPostDetail(match.params.id));
  }, [dispatch, match]);
  return (
    <Fragment>
      <PrimaryLink to='/'>Back to all articles</PrimaryLink>
      <PrimaryLink to={`/posts/delete/${match.params.id}`}>
        Delete Blog
      </PrimaryLink>
      <PrimaryLink to={`/posts/edit/${match.params.id}`}>Edit Blog</PrimaryLink>
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
