import { searchTerm, QUERY } from './reducers';

describe('Search reducer tests:', () => {

  it('defaults to an empty string for query', () => {
    const state = searchTerm(undefined, {});
    expect(state).toEqual('');
  });

  it('sets a query term', () => {
    const state = searchTerm(undefined, { type: QUERY, payload: 'doughnuts' });
    expect(state).toEqual('doughnuts');
    
  });
});