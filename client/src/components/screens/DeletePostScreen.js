import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { Link } from 'react-router-dom';
import { Button } from '../../utils/utilsStyles.styled';
import Modal from '../Modal';

const DeletePostScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.postDelete);
  const handleOnDelete = (id) => {
    dispatch(deletePost(id));
  };

  const renderActions = (
    <React.Fragment>
      <Button onClick={() => handleOnDelete(match.params.id)}>Delete</Button>
      <Link to={`/post/${match.params.id}`}>Cancel</Link>
    </React.Fragment>
  );
  return (
    <Modal
      title='Delete Blog'
      content='Are you sure you want to delete this blog?'
      actions={renderActions}
    />
  );
};

export default DeletePostScreen;
