import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../actions/postActions';
import {
  Form,
  WrapperLabelInput,
  Label,
  Input,
  Textarea,
  Button,
  StyledHomeScreen,
  Loader,
} from '../../utils/utilsStyles.styled';
import SuccessAlert from '../SuccessAlert';

const EditPostScreen = ({ history }) => {
  const dispatch = useDispatch();
  const timer = useRef();
  const { success } = useSelector((state) => state.postEdit);
  const { post } = useSelector((state) => state.postDetail);
  const { userInfo } = useSelector((state) => state.userLogin);
  const [showSuccessTab, setShowSuccessTab] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formValues, setFormValues] = useState({
    _id: post._id,
    title: post.title,
    category: post.category,
    img: post.img,
    content: post.content,
  });
  const { title, content, category, img } = formValues;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/');
    }
    if (success) {
      setShowSuccessTab(true);
      timer.current = setTimeout(() => {
        setShowSuccessTab(false);
      }, 3000);
    }
    return () => {
      if (!success) {
        clearTimeout(timer.current);
      }
    };
  }, [dispatch, history, userInfo, success]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploadingImage(true);
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post('/api/upload', formData, config);
      setFormValues({ ...formValues, img: data });
      setUploadingImage(false);
    } catch (error) {
      console.error(error);
      setUploadingImage(false);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost(formValues));
  };
  if (!post) {
    return;
  }
  return (
    <StyledHomeScreen>
      {userInfo && userInfo.isAdmin && (
        <Form onSubmit={handleOnSubmit}>
          {showSuccessTab && <SuccessAlert message='Post Updated!' />}
          <WrapperLabelInput>
            <Label>Title</Label>
            <Input
              onChange={handleOnChange}
              name='title'
              placeholder='Enter your title'
              value={title}
            />
          </WrapperLabelInput>
          <WrapperLabelInput>
            <Label>Category</Label>
            <Input
              onChange={handleOnChange}
              name='category'
              placeholder='Enter your category'
              value={category}
            />
          </WrapperLabelInput>
          <WrapperLabelInput>
            <Label>Image</Label>
            <Input
              value={img}
              onChange={handleOnChange}
              name='img'
              placeholder='Image URL'
            />
            {uploadingImage && <Loader />}
            <Input
              type='file'
              onChange={uploadFileHandler}
              name='img'
              placeholder='Image URL'
            />
          </WrapperLabelInput>
          <WrapperLabelInput>
            <Label>Post</Label>
            <Textarea
              onChange={handleOnChange}
              name='content'
              placeholder='Enter your content'
              value={content}
            />
          </WrapperLabelInput>
          <WrapperLabelInput>
            <Button type='submit'>Submit</Button>
          </WrapperLabelInput>
        </Form>
      )}
    </StyledHomeScreen>
  );
};

export default EditPostScreen;
