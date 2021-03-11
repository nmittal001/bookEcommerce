import { BUY_DATA_REQUEST, BUY_DATA_SUCCESS, BuyRequestAction, BuyRequestSuccessAction } from './buy-actions';
describe('Buy Action', () => {
  it('should create BuyRequestAction an action', () => {
    const action = new BuyRequestAction();
    expect(action).toEqual({ type: BUY_DATA_REQUEST });
  });

  it('should create BuyRequestSuccessAction an action', () => {
    const payload = { data: 'data' }
    const action = new BuyRequestSuccessAction({ data: 'data' });

    expect({ ...action }).toEqual({
      type: BUY_DATA_SUCCESS,
      payload,
    });
  });
});