import React, { memo, useContext } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import Form from 'App/Components/Form';
import Context from '../Context';

function AuthForm() {
  const { setShowRegister } = useContext(Context);

  return (
    <Form>
      <TextField variant="outlined" label="Username" />
      <TextField variant="outlined" label="Password" type="password" />
      <Typography align="center">
        Ainda não é cadastrado ?
        <Button color="primary" onClick={() => setShowRegister(true)}>
          Cadastre-se
        </Button>
      </Typography>
      <Button variant="contained" color="primary">
        Entrar
      </Button>
    </Form>
  );
}
export default memo(AuthForm);
