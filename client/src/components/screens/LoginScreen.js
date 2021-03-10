import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginDemo, login } from '../../actions/userActions';
import { validateLogin } from '../../validate';
import {
  Form,
  WrapperLabelInput,
  Label,
  Input,
  Button,
  StyledHomeScreen,
  PageTitle,
  PageTitleWrapper,
  SmallValidator,
} from '../../utils/utilsStyles.styled';
import ErrorAlert from '../ErrorAlert';
const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo, error: userInfoError } = useSelector(
    (state) => state.userLogin
  );
  const [errors, setErrors] = useState({});
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
    setErrors({});
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrors(validateLogin(formValues));
    dispatch(login(formValues));
  };

  const handleDemoLogin = () => {
    dispatch(loginDemo());
  };

  return (
    <Fragment>
      <StyledHomeScreen>
        <Form onSubmit={handleOnSubmit}>
          {userInfoError && <ErrorAlert error={userInfoError} />}
          <PageTitleWrapper>
            <PageTitle>Sign In</PageTitle>
          </PageTitleWrapper>
          <WrapperLabelInput>
            <Label>Email</Label>
            <Input
              style={errors.email && { borderColor: 'red' }}
              name='email'
              type='email'
              value={email}
              onChange={handleOnChange}
            />
            {errors.email && <SmallValidator>{errors.email}</SmallValidator>}
          </WrapperLabelInput>
          <WrapperLabelInput>
            <Label>Password</Label>
            <Input
              style={errors.password && { borderColor: 'red' }}
              name='password'
              type='password'
              value={password}
              onChange={handleOnChange}
            />
            {errors.password && (
              <SmallValidator>{errors.password}</SmallValidator>
            )}
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
