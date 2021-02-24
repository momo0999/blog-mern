import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage } from '../../actions/imageActions';
import { Link } from 'react-router-dom';
import { Button } from '../../utils/utilsStyles.styled';
import Modal from '../Modal';

const DeleteImageScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.imageDelete);
  const handleOnDelete = (id) => {
    dispatch(deleteImage(id));
  };
  useEffect(() => {
    if (success) {
      history.push('/photography');
    }
  });

  const renderActions = (
    <React.Fragment>
      <Button onClick={() => handleOnDelete(match.params.id)}>Delete</Button>
      <Link to={`/post/${match.params.id}`}>Cancel</Link>
    </React.Fragment>
  );
  return (
    <Modal
      title='Delete Image'
      content='Are you sure you want to delete this image?'
      actions={renderActions}
    />
  );
};

export default DeleteImageScreen;
