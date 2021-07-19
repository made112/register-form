import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
   
    firstName: Yup.string()
      .required('First Name is reqired'),
    lastName: Yup.string()
      .required('Last Name is reqired'),
    email: Yup.string().email(' email').required('Email is reqired'),
    phoneNumber: Yup.string()
      .required('PhoneNumber is required').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    password: Yup.string()
      .required('password is required'),
    confirmPassword: Yup.string()
      .required('confirm password is required '),
  })
