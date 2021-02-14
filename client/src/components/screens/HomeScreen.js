import React, { useEffect, Fragment } from 'react';
import Post from '../Post';
import CategoriesPostLinks from '../CategoriesPostLinks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsList } from '../../actions/postActions';
import { CategoryLink } from '../../utils/utilsStyles.styled';
import {
  Container,
  StyledHomeScreen,
  PageTitle,
  PageTitleWrapper,
  BorderDiv,
} from '../../utils/utilsStyles.styled';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { posts, loading, error } = postList;
  useEffect(() => {
    if (!posts) {
      return;
    }
    dispatch(fetchPostsList());
  }, [dispatch]);
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
