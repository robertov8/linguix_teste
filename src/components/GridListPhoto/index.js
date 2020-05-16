import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GridList, GridListTile } from '@material-ui/core';
import randomID from '../../utils/randomID';

export default function GridListPhoto({ columns, photos }) {
  const history = useHistory();

  function openPhoto(id) {
    history.push(`/photo/${id}`);
  }

  return (
    <GridList data-testid="grid-photo" cols={columns}>
      {photos.map(photo => (
        <GridListTile key={randomID(8)} onClick={() => openPhoto(photo.id)}>
          <img src={photo.thumb} alt={photo.alt_description} />
        </GridListTile>
      ))}
    </GridList>
  );
}

GridListPhoto.defaultProps = {
  columns: 2,
};

GridListPhoto.propTypes = {
  columns: PropTypes.number,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
