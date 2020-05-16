export const INITIAL_STATE = {
  loading: false,
  forwarded: false,
  photos: [],
  photo: null,
};

export default function photo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@album/CHANGE_LOADING':
      return { ...state, loading: !state.loading };
    case '@album/LOAD_PHOTOS':
      return { ...state, photos: [...state.photos, ...action.payload] };
    case '@album/REFRESH_PHOTOS':
      return { ...state, photos: [...action.payload] };
    case '@album/LOAD_PHOTO':
      return { ...state, photo: { ...action.payload } };
    case '@album/CLEAR_PHOTO':
      return { ...state, photo: null };
    case '@album/CHANGE_FORWARDED':
      return { ...state, forwarded: action.payload };
    default:
      return state;
  }
}
