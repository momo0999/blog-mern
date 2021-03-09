import axios from 'axios';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/postActions';
import {
  Form,
  WrapperLabelInput,
  Label,
  Input,
  Textarea,
  Button,
  StyledHomeScreen,
  PageTitleWrapper,
  PageTitle,
  Loader,
} from '../../utils/utilsStyles.styled';
import SuccessAlert from '../SuccessAlert';

const CreatePostScreen = ({ history }) => {
  const dispatch = useDispatch();
  const timer = useRef();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.postCreate);
  const [showSuccessTab, setShowSuccessTab] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    category: '',
    img: '',
    content: '',
  });

  const { title, content, category, img } = formValues;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value === category ? value.toLowerCase() : value,
    });
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
  }, [success, history, userInfo]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post('/api/upload', formData, config);
      setFormValues({ ...formValues, img: data });
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(formValues));
    setFormValues({
      title: '',
      category: '',
      img: '',
      content: '',
    });
  };
  return (
    <Fragment>
      <PageTitleWrapper>
        <PageTitle>Create a new blog</PageTitle>
        {showSuccessTab && <SuccessAlert message='Post Created!' />}
      </PageTitleWrapper>
      <StyledHomeScreen>
        {userInfo && userInfo.isAdmin && (
          <Form onSubmit={handleOnSubmit}>
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
              <Input
                type='file'
                onChange={uploadFileHandler}
                placeholder='Image Upload'
              />
              {uploading && <Loader />}
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
    </Fragment>
  );
};

export default CreatePostScreen;
