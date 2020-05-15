import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { GridList, GridListTile } from '@material-ui/core';

import api from '../../services/api';

import { useStyles } from './styles';
import './styles.css';
import Loading from '../../components/Loading';

export default function Home() {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    loadPhotos().then();
  }, []);

  async function loadPhotos() {
    try {
      const response = await api.get('photos/random', {
        params: { count: 14 },
      });

      const responsePhotos = response.data.map(photo => ({
        id: photo.id,
        alt_description: photo.alt_description,
        urls: photo.urls,
      }));

      setPhotos([...photos, ...responsePhotos]);
    } catch (e) {
      console.error(`e => ${e}`);
    }
  }

  function loadMore() {
    if (photos.length < 13) return;
    loadPhotos().then();
  }

  return (
    <div className={classes.root}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={true || false}
        loader={<Loading key={0} />}>
        <GridList cols={2}>
          {photos.map(photo => (
            <GridListTile key={photo.id}>
              <img src={photo.urls.thumb} alt={photo.alt_description} />
            </GridListTile>
          ))}
        </GridList>
      </InfiniteScroll>
    </div>
  );
}
