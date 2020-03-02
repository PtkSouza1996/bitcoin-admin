import React, { PropsWithChildren } from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid>{children}</Grid>
    </>
  );
}
