import React, { useEffect, Fragment } from 'react';
import Post from '../Post';
import CategoriesPostLinks from '../CategoriesPostLinks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsList } from '../../actions/postActions';
import {
  Container,
  StyledHomeScreen,
  PageTitle,
  PageTitleWrapper,
} from '../../utils/utilsStyles.styled';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.postList);
  useEffect(() => {
    dispatch(fetchPostsList());
  }, [dispatch]);
  if (!posts) {
    return;
  }
  return (
    <Fragment>
      <PageTitleWrapper>
        <PageTitle>Blog</PageTitle>
      </PageTitleWrapper>
      <CategoriesPostLinks posts={posts} />
      <StyledHomeScreen>
        <Container>
          {loading && <h1>loading...</h1>}
          {error && <h3>{error}</h3>}
          {posts.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </Container>
      </StyledHomeScreen>
    </Fragment>
  );
};

export default HomeScreen;
