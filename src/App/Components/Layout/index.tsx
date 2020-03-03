import React, { PropsWithChildren, memo } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <div style={{ margin: 30 }}>{children}</div>
    </>
  );
}
export default memo(Layout);
