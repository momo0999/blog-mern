import React, { useEffect, Fragment } from 'react';
import Post from '../Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsList } from '../../actions/postActions';
import {
  Container,
  StyledHomeScreen,
  PageTitle,
  PageTitleWrapper,
  CategoryLink,
  RowWrapper,
  Loader,
} from '../../utils/utilsStyles.styled';
import ErrorAlert from '../ErrorAlert';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.postList);
  useEffect(() => {
    dispatch(fetchPostsList());
  }, [dispatch]);
  const allCategories = [...new Set(posts.map((post) => post.category))];

  if (!posts) {
    return;
  }
  return (
    <Fragment>
      <PageTitleWrapper>
        <PageTitle>Blog</PageTitle>
      </PageTitleWrapper>
      <RowWrapper>
        {allCategories.map((category, index) => {
          return (
            <CategoryLink key={index} to={`/posts/category/${category}`}>
              {category}
            </CategoryLink>
          );
        })}
      </RowWrapper>
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

export default HomeScreen;
