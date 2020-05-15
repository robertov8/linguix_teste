const INITIAL_STATE = {
  loading: false,
  photos: [],
};

export default function photo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@album/CHANGE_LOADING':
      return { ...state, loading: !state.loading };
    case '@album/LOAD_PHOTOS':
      return { ...state, photos: [...state.photos, ...action.payload] };
    case '@album/REFRESH_PHOTOS':
      return { ...state, photos: [...action.payload] };
    default:
      return state;
  }
}
