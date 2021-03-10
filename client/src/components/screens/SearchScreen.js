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
  HeaderTextCenter,
} from '../../utils/utilsStyles.styled';
import ErrorAlert from '../ErrorAlert';
const SearchScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const timer = useRef();
  const { posts, error, loading } = useSelector((state) => state.postList);
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
      dispatch(fetchPostsList(debouncedKeyword));
    } else {
      history.push('/search');
    }
  }, [debouncedKeyword, dispatch, history]);

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
      {!posts.length && <HeaderTextCenter>No blogs found</HeaderTextCenter>}
      <StyledHomeScreen>
        <div>{loading && <Loader style={{ fontSize: '80px' }} />}</div>
        {error && <ErrorAlert error={error} />}
        <Container>{renderedPosts}</Container>
      </StyledHomeScreen>
    </Fragment>
  );
};

export default SearchScreen;
