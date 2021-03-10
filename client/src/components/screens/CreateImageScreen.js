import React, { useState, useEffect, useRef, Fragment } from 'react';
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
  CancelLink,
  ButtonWrapper,
} from '../../utils/utilsStyles.styled';
import SuccessAlert from '../SuccessAlert';

const CreateImageScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.imageCreate);
  const { userInfo } = useSelector((state) => state.userLogin);
  const [showSuccessTab, setShowSuccessTab] = useState(false);
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
              <ButtonWrapper>
                <Button type='submit'>Submit</Button>
                <CancelLink to='/dashboard'>Cancel</CancelLink>
              </ButtonWrapper>
            </WrapperLabelInput>
          </Form>
        )}
      </StyledHomeScreen>
    </Fragment>
  );
};

export default CreateImageScreen;
