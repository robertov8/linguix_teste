import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

import { useStyles } from './styles';

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Linguix WebApp
          </Typography>

          <IconButton color="inherit">
            <Refresh />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
