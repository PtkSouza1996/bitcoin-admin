import React, { memo, useContext } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import Form from 'App/Components/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { PostAuth, IAuth } from 'App/Redux/Modules/Auth';
import { IApplicationState } from 'App/Redux/Modules';
import Loading from 'App/Components/Loading';
import Context from '../Context';

function AuthForm() {
  const isLoading = useSelector(
    (state: IApplicationState) => state.auth.isLoading
  );
  const { setShowRegister } = useContext(Context);
  const dispatch = useDispatch();

  const {
    handleChange,
    handleBlur,
    submitForm,
    handleSubmit,
    errors,
    touched,
  } = useFormik<IAuth>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    }),
    onSubmit: values => {
      dispatch(PostAuth(values));
    },
  });

  if (isLoading) return <Loading />;

  return (
    <Form onSubmit={handleSubmit}>
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
        Ainda não é cadastrado ?
        <Button color="primary" onClick={() => setShowRegister(true)}>
          Cadastre-se
        </Button>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => submitForm()}
      >
        Entrar
      </Button>
    </Form>
  );
}
export default memo(AuthForm);
