import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

export default function CardPhoto({ photo }) {
  const classes = useStyles();

  return (
    <Card data-testid="card-photo" className={classes.card}>
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
  );
}

CardPhoto.propTypes = {
  photo: PropTypes.shape({
    alt_description: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
    user: PropTypes.shape({
      username: PropTypes.string,
      name: PropTypes.string,
      profile_image: PropTypes.shape({
        small: PropTypes.string,
      }),
    }),
  }).isRequired,
};
