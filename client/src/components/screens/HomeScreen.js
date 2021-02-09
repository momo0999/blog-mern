import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsList } from '../../actions/postActions';
import { Logo } from '../navbar/Navbar.styled';
import { Container, StyledHomeScreen } from './HomeScreen.styled';
import Post from '../Post';

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
      <Logo>Blog</Logo>
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
