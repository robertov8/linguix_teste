import api from '../../../services/api';
import randomID from '../../../utils/randomID';

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

async function requestPhotosDebug() {
  return new Promise(resolve => {
    setTimeout(() => {
      const photos = [
        {
          alt_description: 'man in black crew neck shirt',
          thumb:
            'https://images.unsplash.com/photo-1588115576788-62d6d4a56d3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description:
            'woman in white t-shirt and blue denim jeans sitting on white chair',
          thumb:
            'https://images.unsplash.com/photo-1587415256077-277eae85f3da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description:
            'green succulent plant on brown wooden chopping board',
          thumb:
            'https://images.unsplash.com/photo-1587382759688-824b29492f4a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description: 'black mercedes benz car with black and red wheel',
          thumb:
            'https://images.unsplash.com/photo-1587396179981-2bece0767d9f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description: 'grayscale photo of trees in forest',
          thumb:
            'https://images.unsplash.com/photo-1588573940794-ac53c3dc3fe4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description: 'brown rocky mountain under starry night',
          thumb:
            'https://images.unsplash.com/photo-1589001201041-8e0a4893da49?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description:
            'person in red hoodie standing on rocky ground under white clouds during daytime',
          thumb:
            'https://images.unsplash.com/photo-1587823418404-1b3dafaeac68?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description: 'aerial view of mountains during daytime',
          thumb:
            'https://images.unsplash.com/photo-1587063299183-f60816250cad?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description: 'white ceramic sink with stainless steel faucet',
          thumb:
            'https://images.unsplash.com/photo-1588345921489-f61ad896c562?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description:
            'silhouette of 2 horses on grass field during daytime',
          thumb:
            'https://images.unsplash.com/photo-1587576958163-caed8542c5d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description:
            'person in blue denim jeans and brown and white nike sneakers',
          thumb:
            'https://images.unsplash.com/photo-1587772310070-882dd52236e2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description: 'white printer paper on white table',
          thumb:
            'https://images.unsplash.com/photo-1588774604278-0a73bc7b2f2e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description: 'woman in red shirt driving car during daytime',
          thumb:
            'https://images.unsplash.com/photo-1587597132606-dbb2322f6660?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
        {
          alt_description: 'woman in white and black plaid button up shirt',
          thumb:
            'https://images.unsplash.com/photo-1587844939565-ff48c0134c6f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNDk3NH0',
        },
      ];

      const response = photos.map(photo => {
        return { ...photo, id: randomID(8) };
      });
      resolve(response);
    }, 1000);
  });
}

export function loadPhotoAction(id) {
  return async dispatch => {
    dispatch({ type: '@album/CHANGE_LOADING' });
    dispatch({ type: '@album/CLEAR_PHOTO' });

    try {
      const response = await api.get(`photos/${id}`);

      dispatch(changeForwardedAction(true));
      dispatch({ type: '@album/LOAD_PHOTO', payload: response.data });
    } catch (e) {
      console.error(`e => ${e}`);
    }

    dispatch({ type: '@album/CHANGE_LOADING' });
  };
}

export function changeForwardedAction(status = false) {
  return { type: '@album/CHANGE_FORWARDED', payload: status };
}
