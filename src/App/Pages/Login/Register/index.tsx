import React, { memo, useContext } from 'react';
import { Typography, Button, TextField } from '@material-ui/core';
import Form from 'App/Components/Form';
import Context from '../Context';

function RegisterForm() {
  const { setShowRegister } = useContext(Context);

  return (
    <Form>
      <TextField variant="outlined" label="Name" />
      <TextField variant="outlined" label="Username" />
      <TextField variant="outlined" label="Password" type="password" />
      <Typography align="center">
        Já tem um conta ?
        <Button color="primary" onClick={() => setShowRegister(false)}>
          Logar
        </Button>
      </Typography>
      <Button variant="contained" color="primary">
        Cadastrar
      </Button>
    </Form>
  );
}

export default memo(RegisterForm);
