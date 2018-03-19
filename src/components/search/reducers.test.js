import { search, QUERY } from './reducers';

describe('Search reducer tests:', () => {

  it('defaults to an empty string for query', () => {
    const state = search(undefined, {});
    expect(state).toEqual('');
  });

  it('sets a query term', () => {
    const state = search(undefined, { type: QUERY, payload: 'doughnuts'});
    expect(state).toEqual('doughnuts');
  })
});