import React, { memo } from 'react';
import { Box, CircularProgress } from '@material-ui/core';

function Loading() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
      <CircularProgress />
    </Box>
  );
}
export default memo(Loading);
