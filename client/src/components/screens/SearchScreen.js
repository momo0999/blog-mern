import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsSearch } from '../../actions/postActions';
import Post from '../Post';
import {
  StyledHomeScreen,
  InputWrapper,
  SearchInput,
  Container,
  Loader,
  HeaderTextCenter,
} from '../../utils/utilsStyles.styled';
import ErrorAlert from '../ErrorAlert';
const SearchScreen = ({ history }) => {
  const dispatch = useDispatch();
  const timer = useRef();
  const { posts, error, loading } = useSelector((state) => state.postSearch);
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [keyword]);

  useEffect(() => {
    if (debouncedKeyword) {
      history.push(`/search/${debouncedKeyword}`);
      dispatch(fetchPostsSearch(debouncedKeyword));
    } else {
      history.push('/search');
    }
  }, [debouncedKeyword, dispatch, history]);

  const renderedPosts = () => {
    return posts.map((post) => {
      return <Post key={post._id} post={post} />;
    });
  };

  return (
    <Fragment>
      <InputWrapper>
        <SearchInput
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder='Search...'
          spellCheck={false}
        />
      </InputWrapper>
      {posts.length === 0 && debouncedKeyword && (
        <HeaderTextCenter>No blogs found</HeaderTextCenter>
      )}
      <StyledHomeScreen>
        <div>{loading && <Loader style={{ fontSize: '80px' }} />}</div>
        {error && <ErrorAlert error={error} />}
        {debouncedKeyword.length !== 0 && (
          <Container>{renderedPosts()}</Container>
        )}
      </StyledHomeScreen>
    </Fragment>
  );
};

export default SearchScreen;
