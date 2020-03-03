import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { FetchBalance } from 'App/Redux/Modules/Balance';
import Balance from './Balance';

export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBalance());
  }, [dispatch]);

  return (
    <Grid container direction="column" justify="center" spacing={4}>
      <Grid item xl>
        <div>Dashboard</div>
      </Grid>
      <Grid item xl={4}>
        <Balance />
      </Grid>
    </Grid>
  );
}
