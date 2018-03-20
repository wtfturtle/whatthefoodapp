import { results, RESULTS_LOAD } from './reducers';

describe('Results reducer tests:', () => {

  it('defaults to an empty array for query', () => {
    const state = results(undefined, {});
    expect(state).toEqual([]);
  });

  it.skip('sets a query term', () => {
    const state = results(undefined, { type: RESULTS_LOAD, payload: { name: 'voodoo' } });
    expect(state.name).toEqual('voodoo');
    
  });
});