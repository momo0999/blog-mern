import axios from 'axios';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePosts } from '../../actions/postActions';
import { validateCreatePost } from '../../validate';
import { POST_CREATE_RESET } from '../../actions/types';
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
  SmallValidator,
} from '../../utils/utilsStyles.styled';
import SuccessAlert from '../SuccessAlert';

const CreatePostScreen = ({ history }) => {
  const dispatch = useDispatch();
  const timer = useRef();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.postCreate);
  const [errors, setErrors] = useState({});
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
    setErrors({});
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
      setFormValues({
        title: '',
        category: '',
        img: '',
        content: '',
      });
      setShowSuccessTab(true);
      dispatch({ type: POST_CREATE_RESET });
      timer.current = setTimeout(() => {
        setShowSuccessTab(false);
      }, 3000);
    }
    return () => {
      if (!success) {
        clearTimeout(timer.current);
      }
    };
  }, [success, history, userInfo, dispatch]);

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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateCreatePost(formValues));
    await dispatch(createPost(formValues));
    dispatch(updatePosts());
  };
  return (
    <Fragment>
      <PageTitleWrapper>
        <PageTitle>Create a new blog</PageTitle>
      </PageTitleWrapper>
      <StyledHomeScreen>
        {userInfo && userInfo.isAdmin && (
          <Form onSubmit={handleOnSubmit}>
            {showSuccessTab && <SuccessAlert message='Post Created!' />}
            <WrapperLabelInput>
              <Label>Title</Label>
              <Input
                style={errors.title && { borderColor: 'red' }}
                onChange={handleOnChange}
                name='title'
                placeholder='Enter your title'
                value={title}
              />
              {errors.title && <SmallValidator>{errors.title}</SmallValidator>}
            </WrapperLabelInput>
            <WrapperLabelInput>
              <Label>Category</Label>
              <Input
                style={errors.category && { borderColor: 'red' }}
                onChange={handleOnChange}
                name='category'
                placeholder='Enter your category'
                value={category}
              />
              {errors.category && (
                <SmallValidator>{errors.category}</SmallValidator>
              )}
            </WrapperLabelInput>
            <WrapperLabelInput>
              <Label>Image</Label>
              <Input
                style={errors.img && { borderColor: 'red' }}
                value={img}
                onChange={handleOnChange}
                name='img'
                placeholder='Image URL'
              />
              {errors.img && <SmallValidator>{errors.img}</SmallValidator>}
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
                style={errors.content && { borderColor: 'red' }}
                onChange={handleOnChange}
                name='content'
                placeholder='Enter your content'
                value={content}
              />
              {errors.content && (
                <SmallValidator>{errors.content}</SmallValidator>
              )}
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
