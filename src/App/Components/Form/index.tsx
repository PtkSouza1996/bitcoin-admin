import React, { PropsWithChildren, memo } from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '& p': {
      margin: '0px 15px',
    },
    '& .MuiFormControl-root': {
      margin: '15px',
    },
  },
});

function Form({
  children,
  ...rest
}: PropsWithChildren<JSX.IntrinsicElements['form']>) {
  const stylesheet = styles();

  return (
    <form className={stylesheet.form} {...rest}>
      {children}
    </form>
  );
}
export default memo(Form);
