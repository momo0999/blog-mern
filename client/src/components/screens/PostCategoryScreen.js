import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByCategory } from '../../actions/postActions';
import Post from '../Post';
import { Logo } from '../navbar/Navbar.styled';
import {
  CategoryLink,
  RowWrapper,
  Container,
  StyledHomeScreen,
} from '../../utils/utilsStyles.styled';

const PostCategoryScreen = ({ match }) => {
  const dispatch = useDispatch();
  const postCategory = useSelector((state) => state.postCategory);
  const { posts, loading, error } = postCategory;
  console.log(postCategory);
  useEffect(() => {
    if (!posts) {
      return;
    }
    dispatch(fetchPostsByCategory(match.params.category));
  }, [dispatch]);
  const allCategories = ['All', ...new Set(posts.map((post) => post.category))];
  return (
    <Fragment>
      <Logo>Blog</Logo>
      <RowWrapper>
        {allCategories.map((category, index) => {
          return (
            <CategoryLink
              key={index}
              to={category === 'All' ? '/' : `/posts/category/${category}`}
            >
              {category}
            </CategoryLink>
          );
        })}
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
