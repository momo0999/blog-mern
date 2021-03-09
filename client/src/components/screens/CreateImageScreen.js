import React, { useState, useEffect, useRef, Fragment } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createImage } from '../../actions/imageActions';
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
} from '../../utils/utilsStyles.styled';
import SuccessAlert from '../SuccessAlert';

const CreateImageScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.imageCreate);
  const { userInfo } = useSelector((state) => state.userLogin);
  const [showSuccessTab, setShowSuccessTab] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formValues, setFormValues] = useState({
    img: '',
    category: '',
  });
  const { img, category } = formValues;
  const timer = useRef();

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
  const handleOnChange = (e) => {
    const { name, value } = e.target;
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
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createImage(formValues));
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
        <PageTitle>Add a photo</PageTitle>
      </PageTitleWrapper>

      <StyledHomeScreen>
        {userInfo && userInfo.isAdmin && (
          <Form onSubmit={handleOnSubmit}>
            {showSuccessTab && <SuccessAlert message='Image Created!' />}
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
              <Label>Category</Label>
              <Input
                onChange={handleOnChange}
                name='category'
                placeholder='Enter your category'
                value={category}
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

export default CreateImageScreen;
