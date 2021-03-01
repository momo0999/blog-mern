import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPostsList,
  deletePost,
  fetchPostDetail,
} from '../../actions/postActions';
import { getImages, deleteImage } from '../../actions/imageActions';
import {
  Td,
  Table,
  Tr,
  Th,
  DangerButton,
  PrimaryButton,
  IconButtonLarge,
  Wrapper,
} from '../../utils/utilsStyles.styled';
import { StyledLink } from '../navbar/Navbar.styled';
import Modal from '../Modal';
import SuccessAlert from '../SuccessAlert';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const DashboardScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const timer = useRef();
  const { images, loading: loadingImages, error: errorImages } = useSelector(
    (state) => state.imageList
  );
  const { userInfo } = useSelector((state) => state.userLogin);
  const { posts, loading, error } = useSelector((state) => state.postList);
  const { success: successDelete } = useSelector((state) => state.postDelete);
  const [postDelete, setPostDelete] = useState(false);
  const [postId, setPostId] = useState('');
  const [imageDelete, setImageDelete] = useState(false);
  const [imageId, setImageId] = useState('');
  const [showSuccessDeleteTab, setShowSuccessDeleteTab] = useState(false);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(fetchPostsList());
      dispatch(getImages());
    } else {
      history.push('/');
    }
  }, [dispatch, userInfo, history]);

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
  const handleOnDeleteImageModal = async (id) => {
    await dispatch(deleteImage(id));
    setImageDelete(false);
    history.push('/dashboard');
    dispatch(getImages());
  };

  const handleDeleteIcon = (id) => {
    setPostDelete(true);
    setPostId(id);
  };

  const handleEditPost = async (id) => {
    await dispatch(fetchPostDetail(id));
    history.push(`/posts/edit/${id}`);
  };

  const handleDeleteImage = (id) => {
    setImageDelete(true);
    setImageId(id);
  };

  const renderImageActions = (
    <React.Fragment>
      <DangerButton onClick={() => handleOnDeleteImageModal(imageId)}>
        Delete
      </DangerButton>
      <PrimaryButton onClick={() => setImageDelete(false)}>
        Cancel
      </PrimaryButton>
    </React.Fragment>
  );

  const renderActions = (
    <React.Fragment>
      <DangerButton onClick={() => handleOnDeleteModal(postId)}>
        Delete
      </DangerButton>
      <PrimaryButton onClick={() => setPostDelete(false)}>Cancel</PrimaryButton>
    </React.Fragment>
  );
  if (!posts || !userInfo) {
    return;
  }
  return (
    <Wrapper>
      {postDelete && (
        <Modal
          title='Delete Blog'
          content='Are you sure you want to delete this blog?'
          actions={renderActions}
        />
      )}
      {imageDelete && (
        <Modal
          title='Delete Image'
          content='Are you sure you want to delete this Image?'
          actions={renderImageActions}
        />
      )}
      {showSuccessDeleteTab && <SuccessAlert message='Post Deleted!' />}
      {loading || (loadingImages && <h1>Loading...</h1>)}
      {error && <h1>{error}</h1>}
      {errorImages && <h1>{errorImages}</h1>}
      <StyledLink to='/posts/create'>
        <IconButtonLarge>
          <PostAddIcon style={{ fontSize: '30px' }}></PostAddIcon>
        </IconButtonLarge>
      </StyledLink>
      <Table>
        <tbody>
          <Tr>
            <Th>Title</Th>
            <Th>Edit/Delete</Th>
          </Tr>
          {posts.map((post) => {
            return (
              <Tr key={post._id}>
                <Td>{post.title}</Td>
                <Td>
                  <IconButtonLarge onClick={() => handleEditPost(post._id)}>
                    <EditIcon></EditIcon>
                  </IconButtonLarge>

                  <IconButtonLarge onClick={() => handleDeleteIcon(post._id)}>
                    <DeleteIcon></DeleteIcon>
                  </IconButtonLarge>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
      <StyledLink to='/images/create'>
        <IconButtonLarge>
          <AddPhotoAlternateIcon style={{ fontSize: '30px' }} />
        </IconButtonLarge>
      </StyledLink>
      <Table>
        <tbody>
          <Tr>
            <Th>Title</Th>
            <Th>Edit/Delete</Th>
          </Tr>
          {images.map((image) => {
            return (
              <Tr key={image._id}>
                <Td>{image._id}</Td>
                <Td>
                  <IconButtonLarge onClick={() => handleDeleteImage(image._id)}>
                    <DeleteIcon></DeleteIcon>
                  </IconButtonLarge>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default DashboardScreen;
