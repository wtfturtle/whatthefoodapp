import { results, userVenues, RESULTS_LOAD, VENUE_ADD } from './reducers';

describe('Results reducer tests:', () => {

  it('defaults to an empty array for query', () => {
    const state = results(undefined, {});
    expect(state).toEqual([]);
  });

  it.skip('sets a query term', () => {
    const state = results(undefined, { type: RESULTS_LOAD, payload: { name: 'voodoo' } });
    expect(state.name).toEqual('voodoo');
    
  });

  it('defaults to empty array for venues', () => {
    const state = userVenues(undefined, {});
    expect(state).toEqual([]);
  });

  it('adds a venue to user venues', () => {
    const state = userVenues(undefined, { type: VENUE_ADD, payload: { name: 'voodoo' } });
    expect(state).toEqual([{ name: 'voodoo' }]);
  });
});