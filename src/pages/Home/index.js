import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { GridList, GridListTile } from '@material-ui/core';

import { useStyles } from './styles';
import './styles.css';

export default function Home() {
  const classes = useStyles();
  const [photos, setPhotos] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const URL = 'https://api.adorable.io/avatars/500';

  function loadMore() {
    let lastPhoto = photos[photos.length - 1];

    const more5Photos = [];

    for (let i = 0; i < 5; i += 1) {
      lastPhoto += 1;
      more5Photos.push(lastPhoto);
    }

    setPhotos([...photos, ...more5Photos]);
  }

  return (
    <div className={classes.root}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        loader={
          <div className="loader" key={0}>
            Loading...
          </div>
        }>
        <GridList cols={2}>
          {photos.map(photo => (
            <GridListTile key={photo}>
              <img src={`${URL}/${photo}`} alt={photo} />
            </GridListTile>
          ))}
        </GridList>
      </InfiniteScroll>
    </div>
  );
}
