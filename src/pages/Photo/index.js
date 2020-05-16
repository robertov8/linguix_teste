import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

import Loading from '../../components/Loading';
import { loadPhotoAction } from '../../store/modules/album/action';

import { useStyles } from './styles';

export default function Photo() {
  const { id } = useParams();
  const classes = useStyles();
  const photo = useSelector(state => state.album.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotoAction(id));
  }, []);

  return (
    <>
      {photo ? (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="user" src={photo.user.profile_image.small} />
            }
            title={photo.user.username}
            subheader={photo.user.name}
          />
          <CardMedia
            className={classes.cardMedia}
            image={photo.urls.regular}
            title="Image"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {photo.alt_description}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Loading />
      )}
    </>
  );
}
