import React, { memo, useContext } from 'react';
import { Typography, Button, TextField } from '@material-ui/core';
import Form from 'App/Components/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Context from '../Context';

type IFormValues = {
  name: string;
  username: string;
  password: string;
};

function RegisterForm() {
  const { setShowRegister } = useContext(Context);

  const formik = useFormik<IFormValues>({
    initialValues: {
      name: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required()
        .min(3),
      username: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    }),
    onSubmit: values => console.log(values),
  });

  return (
    <Form>
      <TextField
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        variant="outlined"
        label="Name"
        error={!!formik.errors.name}
        helperText={formik.errors.name}
      />
      <TextField
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        variant="outlined"
        label="Username"
        error={!!formik.errors.username}
        helperText={formik.errors.username}
      />
      <TextField
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        variant="outlined"
        label="Password"
        type="password"
        error={!!formik.errors.password}
        helperText={formik.errors.password}
      />
      <Typography align="center">
        Já tem um conta ?
        <Button color="primary" onClick={() => setShowRegister(false)}>
          Logar
        </Button>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => formik.submitForm()}
      >
        Cadastrar
      </Button>
    </Form>
  );
}

export default memo(RegisterForm);
