import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsList } from '../../actions/postActions';
import Post from '../Post';
import {
  StyledHomeScreen,
  InputWrapper,
  InputHighlight,
  SearchInput,
  Container,
  Loader,
} from '../../utils/utilsStyles.styled';
import ErrorAlert from '../ErrorAlert';
const SearchScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const timer = useRef();
  const { posts, error, loading } = useSelector((state) => state.postList);
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);
  useEffect(() => {
    if (keyword && !posts.length) {
      dispatch(fetchPostsList(debouncedKeyword));
    } else {
      timer.current = setTimeout(() => {
        dispatch(fetchPostsList(keyword));
      }, 500);
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, [keyword, dispatch]);

  // useEffect(() => {
  //   dispatch(fetchPostsList(debouncedKeyword));
  // }, [debouncedKeyword, history, dispatch, keyword]);

  const renderedPosts = posts.map((post) => {
    return <Post key={post._id} post={post} />;
  });
  return (
    <Fragment>
      <InputWrapper>
        <SearchInput
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder='Search...'
          spellCheck={false}
        />
        <InputHighlight className='input-highlight'>
          {keyword.replace(/ /g, '\u00a0')}
        </InputHighlight>
      </InputWrapper>
      <StyledHomeScreen>
        {loading && <Loader style={{ fontSize: '80px' }} />}
        {error && <ErrorAlert error={error} />}
        <Container>{renderedPosts}</Container>
      </StyledHomeScreen>
    </Fragment>
  );
};

export default SearchScreen;
