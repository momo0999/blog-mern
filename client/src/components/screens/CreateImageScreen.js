import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createImage } from '../../actions/imageActions';
import {
  Form,
  WrapperLabelInput,
  Label,
  Input,
  Button,
  StyledHomeScreen,
} from '../../utils/utilsStyles.styled';
import SuccessAlert from '../SuccessAlert';

const CreateImageScreen = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.imageCreate);
  const [showSuccessTab, setShowSuccessTab] = useState(false);
  const [formValues, setFormValues] = useState({
    img: '',
    category: '',
  });
  const { img, category } = formValues;
  const timer = useRef();
  useEffect(() => {
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
  }, [success]);
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
    <StyledHomeScreen>
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
          <Button type='submit'>Submit</Button>
        </WrapperLabelInput>
      </Form>
    </StyledHomeScreen>
  );
};

export default CreateImageScreen;
