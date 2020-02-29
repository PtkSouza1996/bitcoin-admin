import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Collapse,
  Paper,
  Typography,
  Box,
} from '@material-ui/core';
import bg from 'assets/bg-login.jpg';
import Register from './Register';
import Auth from './Auth';
import Context from './Context';

const styles = makeStyles({
  container: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    opacity: 0.6,
    minHeight: '100vh',
    width: '100%',
  },
  card: {
    padding: '15px 10px',
    height: 500,
    minWidth: 450,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  collapse: {
    width: '100%',
  },
});
export default function LoginPage() {
  const stylesheet = styles();
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Grid
      container
      className={stylesheet.container}
      justify="center"
      alignItems="center"
    >
      <Context.Provider value={{ showRegister, setShowRegister }}>
        <Grid item>
          <Paper elevation={3} className={stylesheet.card}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              flex={1}
            >
              <Typography align="center" variant="h4" gutterBottom>
                {showRegister ? 'Cadastro' : 'Entrar'}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              flex={4}
            >
              <Collapse in={showRegister} className={stylesheet.collapse}>
                <Register />
              </Collapse>
              <Collapse in={!showRegister} className={stylesheet.collapse}>
                <Auth />
              </Collapse>
            </Box>
          </Paper>
        </Grid>
      </Context.Provider>
    </Grid>
  );
}
