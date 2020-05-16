import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import GridListPhoto from '../../components/GridListPhoto';
import Loading from '../../components/Loading';

import { loadPhotosAction } from '../../store/modules/album/action';
import { useStyles } from './styles';

export default function Home() {
  const photos = useSelector(state => state.album.photos);
  const dispatch = useDispatch();
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

  return (
    <div className={classes.container}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore
        loader={<Loading key={0} />}>
        <GridListPhoto columns={columns} photos={photos} />
      </InfiniteScroll>
    </div>
  );
}
