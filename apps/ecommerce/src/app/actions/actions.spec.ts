import { SEARCH_DATA_REQUEST, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILED, SearchRequestAction, SearchRequestSuccessAction, SearchRequestFailedAction } from './actions';
describe('Buy Action', () => {
  it('should create SearchRequestAction an action', () => {
    const action = new SearchRequestAction('query');
    expect(action).toEqual( {
         "payload": "query",
          "type": SEARCH_DATA_REQUEST,
        });
  });

  it('should create SearchRequestFailedAction an action', () => {
    const action = new SearchRequestFailedAction();
    expect(action).toEqual({ type: SEARCH_DATA_FAILED });
  });

  it('should create SearchRequestSuccessAction an action', () => {
    const payload = { data: [] }
    const action = new SearchRequestSuccessAction({ data: [] });
    expect({ ...action }).toEqual({
      type: SEARCH_DATA_SUCCESS,
      payload,
    });
  });
});