import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

import { useStyles } from './styles';
import { refreshPhotosAction } from '../../store/modules/album/action';

export default function Index() {
  const loading = useSelector(state => state.album.loading);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Linguix WebApp
          </Typography>

          <IconButton
            color="inherit"
            onClick={() => dispatch(refreshPhotosAction())}>
            {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              <Refresh />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
