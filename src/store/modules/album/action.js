import api from '../../../services/api';

export function loadPhotosAction() {
  return async (dispatch, getState) => {
    const { album } = getState();

    if (album.forwarded && album.photos.length > 1) {
      dispatch(changeForwardedAction());
      return;
    }

    const photos = await requestPhotos();
    dispatch({ type: '@album/LOAD_PHOTOS', payload: photos });
  };
}

export function refreshPhotosAction() {
  return async dispatch => {
    dispatch({ type: '@album/CHANGE_LOADING' });

    const photos = await requestPhotos();
    dispatch({ type: '@album/REFRESH_PHOTOS', payload: photos });
    dispatch({ type: '@album/CHANGE_LOADING' });
  };
}

async function requestPhotos() {
  let responsePhotos = [];

  try {
    const response = await api.get('photos/random', {
      params: { count: 14 },
    });

    responsePhotos = response.data.map(photo => ({
      id: photo.id,
      alt_description: photo.alt_description,
      thumb: photo.urls.thumb,
    }));
  } catch (e) {
    console.error(`e => ${e}`);
  }

  return responsePhotos;
}

export function loadPhotoAction(id) {
  return async dispatch => {
    dispatch({ type: '@album/CHANGE_LOADING' });
    dispatch({ type: '@album/CLEAR_PHOTO' });

    try {
      const response = await api.get(`photos/${id}`);

      const { user, urls, alt_description } = response.data;

      dispatch(changeForwardedAction(true));
      dispatch({
        type: '@album/LOAD_PHOTO',
        payload: { user, urls, alt_description },
      });
    } catch (e) {
      console.error(`e => ${e}`);
    }

    dispatch({ type: '@album/CHANGE_LOADING' });
  };
}

export function changeForwardedAction(status = false) {
  return { type: '@album/CHANGE_FORWARDED', payload: status };
}
