import React, { memo, useContext } from 'react';
import { Typography, Button, TextField } from '@material-ui/core';
import Form from 'App/Components/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IRegister, PostRegister } from 'App/Redux/Modules/Register';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from 'App/Redux/Modules';
import Loading from 'App/Components/Loading';
import Context from '../Context';

function RegisterForm() {
  const isLoading = useSelector(
    (state: IApplicationState) => state.register.isLoading
  );

  const { setShowRegister } = useContext(Context);
  const dispatch = useDispatch();

  const {
    handleChange,
    handleBlur,
    submitForm,
    handleSubmit,
    touched,
    errors,
    resetForm,
  } = useFormik<IRegister>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required()
        .min(3),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    }),
    onSubmit: values => {
      dispatch(PostRegister(values));
    },
  });

  if (isLoading) return <Loading />;

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        label="Name"
        error={!!errors.name && touched.name}
      />
      {errors.name && touched.name && (
        <Typography color="error">{errors.name}</Typography>
      )}
      <TextField
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        label="email"
        error={!!errors.email && touched.email}
      />
      {errors.email && touched.email && (
        <Typography color="error">{errors.email}</Typography>
      )}
      <TextField
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        label="Password"
        type="password"
        error={!!errors.password && touched.password}
      />
      {errors.password && touched.password && (
        <Typography color="error">{errors.password}</Typography>
      )}
      <Typography align="center">
        Já tem um conta ?
        <Button
          color="primary"
          onClick={() => {
            setShowRegister(false);
            resetForm();
          }}
        >
          Logar
        </Button>
      </Typography>
      <Button variant="contained" color="primary" onClick={() => submitForm()}>
        Cadastrar
      </Button>
    </Form>
  );
}

export default memo(RegisterForm);
