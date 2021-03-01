import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPostsList,
  deletePost,
  fetchPostDetail,
} from '../../actions/postActions';
import { Td, Table, Tr, Th, ButtonIcon } from '../../utils/utilsStyles.styled';
import { Link } from 'react-router-dom';
import { DangerButton, PrimaryButton } from '../../utils/utilsStyles.styled';
import Modal from '../Modal';
import SuccessAlert from '../SuccessAlert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const DashboardScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const timer = useRef();
  const { posts, loading, error } = useSelector((state) => state.postList);
  const { success: successDelete } = useSelector((state) => state.postDelete);
  const [postDelete, setPostDelete] = useState(false);
  const [showSuccessDeleteTab, setShowSuccessDeleteTab] = useState(false);
  const [postId, setPostId] = useState('');

  useEffect(() => {
    dispatch(fetchPostsList());
  }, [dispatch]);

  useEffect(() => {
    if (successDelete) {
      setShowSuccessDeleteTab(true);
      timer.current = setTimeout(() => {
        setShowSuccessDeleteTab(false);
      }, 3000);
    }
    return () => {
      if (!successDelete) {
        clearTimeout(timer.current);
      }
    };
  }, [successDelete]);

  const handleOnDeleteModal = async (id) => {
    await dispatch(deletePost(id));
    setPostDelete(false);
    history.push('/dashboard');
    dispatch(fetchPostsList());
  };

  const handleDeleteIcon = (id) => {
    setPostDelete(true);
    setPostId(id);
  };

  const handleEditPost = async (id) => {
    await dispatch(fetchPostDetail(id));
    history.push(`/posts/edit/${id}`);
  };

  const renderActions = (
    <React.Fragment>
      <DangerButton onClick={() => handleOnDeleteModal(postId)}>
        Delete
      </DangerButton>
      <PrimaryButton onClick={() => setPostDelete(false)}>Cancel</PrimaryButton>
    </React.Fragment>
  );
  if (!posts) {
    return;
  }
  return (
    <div>
      {postDelete && (
        <Modal
          title='Delete Blog'
          content='Are you sure you want to delete this blog?'
          actions={renderActions}
        />
      )}
      {showSuccessDeleteTab && <SuccessAlert message='Post Deleted!' />}
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <Table>
        <tbody>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Edit/Delete</Th>
          </Tr>
          {posts.map((post) => {
            return (
              <Tr key={post._id}>
                <Td>{post._id}</Td>
                <Td>{post.title}</Td>
                <Td>
                  <ButtonIcon
                    onClick={() => handleEditPost(post._id)}
                    to={`/posts/edit/${post._id}`}
                  >
                    <EditIcon></EditIcon>
                  </ButtonIcon>
                  <ButtonIcon onClick={() => handleDeleteIcon(post._id)}>
                    <DeleteIcon></DeleteIcon>
                  </ButtonIcon>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardScreen;
