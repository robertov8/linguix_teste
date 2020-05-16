import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { ArrowBack, Refresh } from '@material-ui/icons';

import { useStyles } from './styles';
import { refreshPhotosAction } from '../../store/modules/album/action';

export default function Header() {
  const location = useLocation();
  const history = useHistory();
  const loading = useSelector(state => state.album.loading);
  const dispatch = useDispatch();

  const [isBack, setIsBack] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsBack(true);
      return;
    }

    setIsBack(false);
  }, [location]);

  function goBack() {
    history.goBack();
  }

  return (
    <div className={classes.offset}>
      <AppBar position="fixed">
        <Toolbar>
          {isBack && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={goBack}>
              <ArrowBack />
            </IconButton>
          )}

          <Typography className={classes.title} variant="h6" noWrap>
            Linguix WebApp
          </Typography>

          {!isBack && (
            <IconButton
              color="inherit"
              onClick={() => dispatch(refreshPhotosAction())}>
              {loading ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                <Refresh />
              )}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
