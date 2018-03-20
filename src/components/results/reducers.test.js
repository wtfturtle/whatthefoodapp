import { results, userVenues, VENUE_ADD, VENUE_REMOVE } from './reducers';

describe('Results reducer tests:', () => {

  const sample = {
    name: 'Voodoo',
    id: 111,
    price: 'moderate',
    location: 'Portland'
  }

  it('defaults to an empty array for query', () => {
    const state = results(undefined, {});
    expect(state).toEqual([]);
  });

  it('defaults to empty array for venues', () => {
    const state = userVenues(undefined, {});
    expect(state).toEqual([]);
  });

  it('adds a venue to user venues', () => {
    const state = userVenues(undefined, { type: VENUE_ADD, payload: sample });
    expect(state).toEqual([sample]);
  });

  it('removes a venue from user list', () => {
    const state = userVenues([sample], { type: VENUE_REMOVE, payload: 111 });
    expect(state).toEqual([]);
  });
});