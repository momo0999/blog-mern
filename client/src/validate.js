export const validateLogin = (formValues) => {
  let errors = {};
  if (!formValues.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = 'Email address is not valid';
  }

  if (!formValues.password) {
    errors.password = 'Password is required';
  } else if (formValues.password.length < 5) {
    errors.password = 'Password should be more then 4 charcters';
  }
  return errors;
};

export const validateCreatePost = (formValues) => {
  let errors = {};
  if (!formValues.title) {
    errors.title = 'Title is required';
  }
  if (!formValues.category) {
    errors.category = 'Category is required';
  }
  if (!formValues.img) {
    errors.img = 'Image is required';
  }
  if (!formValues.content) {
    errors.content = 'Content is required';
  }
  return errors;
};

export const validateCreateImage = (formValues) => {
  let errors = {};
  if (!formValues.title) {
    errors.title = 'Title is required';
  }
  if (!formValues.category) {
    errors.category = 'Category is required';
  }
  if (!formValues.img) {
    errors.img = 'Image is required';
  }
  return errors;
};
