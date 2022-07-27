// Schema:
// Function that tests the object to check that all the values are valid

//Here goes the schema for the form

import * as Yup from 'yup'

export default Yup.object().shape({
   username: Yup
      .string()
      .min(6, 'Username must be at least 6 characters long')
      .required('Username is required'),
   email: Yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),
   role: Yup
      .string()
      .oneOf(['student', 'instructor', 'tl', 'alumni'])
      .required('Role is required'),
   civil: Yup
      .string()
      .oneOf(['married', 'single'])
      .required('Civil status is required'),
   hiking: Yup.boolean(),
   coding: Yup.boolean(),
   reading: Yup.boolean(),
})
