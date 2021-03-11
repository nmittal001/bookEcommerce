import { CART_DATA_REQUEST, CART_DATA_SUCCESS, CART_DELETE_DATA_SUCCESS, CartRequestAction, CartRequestSuccessAction, CartDeleteSuccessAction} from './cart-actions';
describe('Cart Action', () => {
  it('should create CartRequestAction an action', () => {
    const action = new CartRequestAction();
    expect(action).toEqual({ type: CART_DATA_REQUEST });
  });

  it('should create CartRequestSuccessAction an action', () => {
    const payload = { data: 'data' }
    const action = new CartRequestSuccessAction({ data: 'data' });
    expect({ ...action }).toEqual({
      type: CART_DATA_SUCCESS,
      payload,
    });
  });

  it('should create CartDeleteSuccessAction an action', () => {
    const payload = { data: 'data' }
    const action = new CartDeleteSuccessAction({ data: 'data' });
    expect({ ...action }).toEqual({
      type: CART_DELETE_DATA_SUCCESS,
      payload,
    });
  });

  it('should create CartDeleteSuccessAction an action', () => {
    const payload = { data: {} }
    const action = new CartDeleteSuccessAction();
    expect({ ...action }).toEqual({
      type: CART_DELETE_DATA_SUCCESS,
      payload,
    });
  });
});