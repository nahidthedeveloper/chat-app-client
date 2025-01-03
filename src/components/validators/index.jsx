import * as yup from 'yup'

export const signupSchema = yup
    .object({
        first_name: yup
            .string()
            .required('First name is required')
            .matches(/^[A-Za-z]*$/, 'Please enter valid name')
            .max(40),
        last_name: yup
            .string()
            .required('Last name is required')
            .matches(/^[A-Za-z]*$/, 'Please enter valid name')
            .max(40),
        email: yup
            .string()
            .required('Email is required.')
            .email('Email must be a valid email'),
        password: yup
            .string()
            .required('Password is required.')
            .min(8, 'Password must be at least 8 characters')
            .max(32, 'Password must be at most 32 characters'),
        confirm_password: yup
            .string()
            .required('Confirm password is required.')
            .oneOf([yup.ref('password'), null], 'Password does not match.'),
    })
    .required()

export const loginSchema = yup
    .object({
        email: yup
            .string()
            .email('Email must be a valid email')
            .required('This field is required.'),
        password: yup
            .string()
            .required('This field is required.')
            .min(8, 'Password must be at least 8 characters'),
    })
    .required()
