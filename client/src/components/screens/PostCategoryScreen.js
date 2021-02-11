import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByCategory } from '../../actions/postActions';
import Post from '../Post';
import CategoriesLinks from '../CategoriesLinks';
import { Logo } from '../navbar/Navbar.styled';
import {
  RowWrapper,
  Container,
  StyledHomeScreen,
} from '../../utils/utilsStyles.styled';

const PostCategoryScreen = ({ match }) => {
  const dispatch = useDispatch();
  const postCategory = useSelector((state) => state.postCategory);
  const { posts, loading, error } = postCategory;
  useEffect(() => {
    if (!posts) {
      return;
    }
    dispatch(fetchPostsByCategory(match.params.category));
  }, [dispatch, match]);
  return (
    <Fragment>
      <Logo>Blog</Logo>
      <RowWrapper>
        <CategoriesLinks posts={posts} />
      </RowWrapper>
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

export default PostCategoryScreen;
