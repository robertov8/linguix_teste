import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { GridList, GridListTile } from '@material-ui/core';

import randomID from '../../utils/randomID';

import { loadPhotosAction } from '../../store/modules/album/action';
import Loading from '../../components/Loading';
import { useStyles } from './styles';

export default function Home() {
  const photos = useSelector(state => state.album.photos);
  const dispatch = useDispatch();
  const history = useHistory();
  const [columns, setColumns] = useState(2);
  const classes = useStyles();

  useEffect(() => {
    loadPhotos();
    const width = window.innerWidth;

    if (width > 1440) {
      setColumns(5);
    } else if (width > 999) {
      setColumns(4);
    } else if (width > 500) {
      setColumns(3);
    }
  }, []);

  function loadPhotos() {
    dispatch(loadPhotosAction());
  }

  function loadMore() {
    if (photos.length < 13) return;
    loadPhotos();
  }

  function openPhoto(id) {
    history.push(`/photo/${id}`);
  }

  return (
    <div className={classes.container}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore
        loader={<Loading key={0} />}>
        <GridList cols={columns}>
          {photos.map(photo => (
            <GridListTile key={randomID(8)} onClick={() => openPhoto(photo.id)}>
              <img src={photo.thumb} alt={photo.alt_description} />
            </GridListTile>
          ))}
        </GridList>
      </InfiniteScroll>
    </div>
  );
}
