import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByCategory } from '../../actions/postActions';
import Post from '../Post';
import {
  Container,
  StyledHomeScreen,
  PageTitleWrapper,
  PageTitle,
  PrimaryLink,
  Loader,
} from '../../utils/utilsStyles.styled';
import ErrorAlert from '../ErrorAlert';

const PostCategoryScreen = ({ match }) => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.postCategory);
  useEffect(() => {
    dispatch(fetchPostsByCategory(match.params.category));
  }, [dispatch, match]);
  if (!posts) {
    return;
  }
  return (
    <Fragment>
      <PageTitleWrapper>
        <PageTitle>Blog</PageTitle>
      </PageTitleWrapper>

      <PrimaryLink to='/'>Back to all articles</PrimaryLink>

      <StyledHomeScreen>
        <Container>
          {loading && <Loader style={{ fontSize: '80px' }} />}
          {error && <ErrorAlert error={error} />}
          {posts.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </Container>
      </StyledHomeScreen>
    </Fragment>
  );
};

export default PostCategoryScreen;
