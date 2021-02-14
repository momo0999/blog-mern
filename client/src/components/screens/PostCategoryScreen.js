import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByCategory } from '../../actions/postActions';
import Post from '../Post';
import CategoriesPostLinks from '../CategoriesPostLinks';
import {
  RowWrapper,
  Container,
  StyledHomeScreen,
  PageTitleWrapper,
  PageTitle,
} from '../../utils/utilsStyles.styled';

const PostCategoryScreen = ({ match }) => {
  const dispatch = useDispatch();
  const postCategory = useSelector((state) => state.postCategory);
  const { posts, loading, error } = postCategory;
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
      <RowWrapper>
        <CategoriesPostLinks posts={posts} />
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
