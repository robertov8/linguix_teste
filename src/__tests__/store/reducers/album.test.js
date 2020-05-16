import reducer, { INITIAL_STATE } from '../../../store/modules/album/reducer';
import * as actions from '../../../store/modules/album/action';

describe('Album reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});
    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('@album/CHANGE_LOADING', () => {
    const state = reducer(INITIAL_STATE, { type: '@album/CHANGE_LOADING' });
    expect(state.loading).toBeTruthy();
  });
});
