import React, { memo } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  makeStyles,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { IApplicationState } from 'App/Redux/Modules';
import Loading from 'App/Components/Loading';

const styles = makeStyles({
  card: {
    minWidth: 300,
  },
});
function Balance() {
  const stylesheet = styles();
  const { formatted_balance, isLoading } = useSelector(
    (state: IApplicationState) => state.balance
  );

  return (
    <Card className={stylesheet.card}>
      <CardHeader
        title={
          <Typography color="textSecondary" variant="h5">
            Saldo:
          </Typography>
        }
      />
      <CardContent>
        {isLoading ? (
          <Loading />
        ) : (
          <Typography variant="h3" align="center" noWrap>
            {formatted_balance}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default memo(Balance);
