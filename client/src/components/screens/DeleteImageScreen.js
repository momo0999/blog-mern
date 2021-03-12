import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage } from '../../actions/imageActions';
import { IMAGE_DELETE_RESET } from '../../actions/types';
import { PrimaryLink, DangerButton } from '../../utils/utilsStyles.styled';
import Modal from '../Modal';

const DeleteImageScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const timer = useRef();
  const { success } = useSelector((state) => state.imageDelete);
  const handleOnDelete = (id) => {
    dispatch(deleteImage(id));
  };
  useEffect(() => {
    if (success) {
      timer.current = setTimeout(() => {
        history.push('/photography');
        dispatch({ type: IMAGE_DELETE_RESET });
      }, 0);
    }
    return () => {
      clearTimeout(timer.current);
    };
  });
  const renderActions = (
    <React.Fragment>
      <DangerButton onClick={() => handleOnDelete(match.params.id)}>
        Delete
      </DangerButton>
      <PrimaryLink to='/photography'>Cancel</PrimaryLink>
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
