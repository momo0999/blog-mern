import React, { useState, useEffect, useRef, Fragment } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createImage, fetchImages } from '../../actions/imageActions';
import { validateCreateImage } from '../../validate';
import {
  Form,
  WrapperLabelInput,
  Label,
  Input,
  Button,
  StyledHomeScreen,
  PageTitleWrapper,
  PageTitle,
  Loader,
  SmallValidator,
} from '../../utils/utilsStyles.styled';
import SuccessAlert from '../SuccessAlert';

const CreateImageScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.imageCreate);
  const { userInfo } = useSelector((state) => state.userLogin);
  const [errors, setErrors] = useState({});
  const [showSuccessTab, setShowSuccessTab] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    img: '',
    category: '',
  });
  const { img, category, title } = formValues;
  const timer = useRef();

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/');
    }
    if (success) {
      setFormValues({
        title: '',
        category: '',
        img: '',
      });
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
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setErrors({});
    setFormValues({ ...formValues, [name]: value });
  };
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
    setErrors(validateCreateImage(formValues));
    await dispatch(createImage(formValues));
    dispatch(fetchImages());
  };

  return (
    <Fragment>
      <PageTitleWrapper>
        <PageTitle>Add a photo</PageTitle>
      </PageTitleWrapper>

      <StyledHomeScreen>
        {userInfo && userInfo.isAdmin && (
          <Form onSubmit={handleOnSubmit}>
            {showSuccessTab && <SuccessAlert message='Image Created!' />}
            <WrapperLabelInput>
              <Label>Title</Label>
              <Input
                style={errors.title && { borderColor: 'red' }}
                onChange={handleOnChange}
                name='title'
                placeholder='Enter a title'
                value={title}
              />
              {errors.title && <SmallValidator>{errors.title}</SmallValidator>}
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
              <Label>Category</Label>
              <Input
                style={errors.category && { borderColor: 'red' }}
                onChange={handleOnChange}
                name='category'
                placeholder='Enter a category'
                value={category}
              />
              {errors.category && (
                <SmallValidator>{errors.category}</SmallValidator>
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

export default CreateImageScreen;
