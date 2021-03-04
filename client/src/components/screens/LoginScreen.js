import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginDemo, login } from '../../actions/userActions';
import {
  Form,
  WrapperLabelInput,
  Label,
  Input,
  Button,
  StyledHomeScreen,
  PageTitle,
  PageTitleWrapper,
} from '../../utils/utilsStyles.styled';
const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formValues;

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formValues));
  };

  const handleDemoLogin = () => {
    dispatch(loginDemo());
  };

  return (
    <Fragment>
      <PageTitleWrapper>
        <PageTitle>Sign In</PageTitle>
      </PageTitleWrapper>
      <StyledHomeScreen>
        <Form onSubmit={handleOnSubmit}>
          <WrapperLabelInput>
            <Label>Email</Label>
            <Input
              name='email'
              type='email'
              value={email}
              onChange={handleOnChange}
            />
          </WrapperLabelInput>
          <WrapperLabelInput>
            <Label>Password</Label>
            <Input
              name='password'
              type='password'
              value={password}
              onChange={handleOnChange}
            />
          </WrapperLabelInput>
          <WrapperLabelInput>
            <Button type='submit'>Login</Button>
          </WrapperLabelInput>
          <WrapperLabelInput>
            <Button onClick={handleDemoLogin}>Demo Login</Button>
          </WrapperLabelInput>
        </Form>
      </StyledHomeScreen>
    </Fragment>
  );
};

export default LoginScreen;
