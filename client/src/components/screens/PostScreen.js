import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetail } from '../../actions/postActions';
import {
  ImageContainer,
  Img,
  PostDetail,
  Title,
  Text,
  CategoryLink,
  TextContainer,
  PrimaryLink,
  PrimaryButton,
  DangerButton,
} from '../../utils/utilsStyles.styled';
import { deletePost } from '../../actions/postActions';
import Modal from '../Modal';

const PostScreen = ({ match, history }) => {
  const [postDelete, setPostDelete] = useState(false);
  const dispatch = useDispatch();
  const {
    post: { title, img, content, category },
    loading,
    error,
  } = useSelector((state) => state.postDetail);
  useEffect(() => {
    dispatch(fetchPostDetail(match.params.id));
  }, [dispatch, match]);

  const handleOnDelete = (id) => {
    dispatch(deletePost(id));
    setPostDelete(false);
    history.push('/');
  };
  const renderActions = (
    <React.Fragment>
      <DangerButton onClick={() => handleOnDelete(match.params.id)}>
        Delete
      </DangerButton>
      <PrimaryButton onClick={() => setPostDelete(false)}>Cancel</PrimaryButton>
    </React.Fragment>
  );

  return (
    <Fragment>
      {postDelete && (
        <Modal
          title='Delete Blog'
          content='Are you sure you want to delete this blog?'
          actions={renderActions}
        />
      )}
      <PrimaryLink to='/'>Back to all articles</PrimaryLink>
      <PrimaryButton onClick={() => setPostDelete(true)}>
        Delete Blog
      </PrimaryButton>
      <PrimaryLink to={`/posts/edit/${match.params.id}`}>Edit Blog</PrimaryLink>
      <PostDetail>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}

        <ImageContainer>
          <Img src={img} alt='' />
        </ImageContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{content}</Text>
        </TextContainer>
        <CategoryLink to={`/posts/category/${category}`}>
          {category}
        </CategoryLink>
      </PostDetail>
    </Fragment>
  );
};

export default PostScreen;
