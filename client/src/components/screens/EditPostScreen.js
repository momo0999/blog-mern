import React, { useEffect, useState } from 'react';
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
} from '../../utils/utilsStyles.styled';
import SuccessAlert from '../SuccessAlert';

const EditPostScreen = ({ match }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.postEdit);
  const { post } = useSelector((state) => state.postDetail);
  const [showSuccessTab, setShowSuccessTab] = useState(false);
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
    if (success) {
      const setTimeoutId = setTimeout(() => {
        setShowSuccessTab(true);
      }, 0);

      setTimeout(() => {
        setShowSuccessTab(false);
        clearTimeout(setTimeoutId);
      }, 3000);
    }
  }, [dispatch, match, success]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost(formValues));
  };
  if (!post) {
    return;
  }
  return (
    <StyledHomeScreen>
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
    </StyledHomeScreen>
  );
};

export default EditPostScreen;
