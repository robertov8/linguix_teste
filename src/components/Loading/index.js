import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container data-testid="loading">
      <CircularProgress />
    </Container>
  );
}
