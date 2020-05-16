import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '../../components/Loading';
import CardPhoto from '../../components/CardPhoto';

import { loadPhotoAction } from '../../store/modules/album/action';

export default function Photo() {
  const { id } = useParams();
  const photo = useSelector(state => state.album.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotoAction(id));
  }, []);

  return photo ? <CardPhoto photo={photo} /> : <Loading />;
}
