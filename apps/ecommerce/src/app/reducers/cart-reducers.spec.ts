import * as fromCart from './cart-reducers';
import * as fromActions from '../actions/cart-actions';
describe('Cart Reducer action', () => {
    it('should set loading to true', () => {
        const action = new fromActions.CartRequestAction();
        const state = fromCart.CartReducer({
            loading: false,
            loaded: false,
            cartData: []
        }, action);
        expect(state.loading).toEqual(true);
        expect(state.loaded).toEqual(false);
        //   expect(state.entities).toEqual({});
    });

    it('should populate success data', () => {
        const action = new fromActions.CartRequestSuccessAction({ data: [] });
        const state = fromCart.CartReducer({
            loading: false,
            loaded: false,
            cartData: []
        }, action);
        expect(state.loaded).toEqual(true);
        expect(state.loading).toEqual(false);
        // expect(state.entities).toEqual(entities);
    });

    it('should populate success data if length > 0', () => {
        const action = new fromActions.CartRequestSuccessAction({ data: [{ id: 123 }] });
        const state = fromCart.CartReducer({
            loading: false,
            loaded: false,
            cartData: [{ id: 123 }]
        }, action);
        expect(state.loaded).toEqual(true);
        expect(state.loading).toEqual(false);
        // expect(state.entities).toEqual(entities);
    });

    it('should populate Cart Delete Success', () => {
        const action = new fromActions.CartDeleteSuccessAction();
        const state = fromCart.CartReducer({
            loading: false,
            loaded: false,
            cartData: []
        }, action);
        expect(state.loaded).toEqual(true);
        expect(state.loading).toEqual(false);
        // expect(state.entities).toEqual(entities);
    });

    it('should populate Cart Delete Success if length > 0', () => {
        const action = new fromActions.CartDeleteSuccessAction({ data: [{ id: 123 }] });
        const state = fromCart.CartReducer({
            loading: false,
            loaded: false,
            cartData: [{ id: 123 }]
        }, action);
        expect(state.loaded).toEqual(true);
        expect(state.loading).toEqual(false);
        // expect(state.entities).toEqual(entities);
    });

    it('should set default action', () => {
        const action = { type: 'CART_DATA' }
        const state = fromCart.CartReducer({
            loading: false,
            loaded: false,
            cartData: []
        }, action);
        expect(state.loading).toEqual(false);
        expect(state.loaded).toEqual(false);
        //   expect(state.entities).toEqual({});
    });

    it('should set default action without state', () => {
        const action = { type: 'CART_DATA' }
        const state = fromCart.CartReducer(undefined, action);
        expect(state.loading).toEqual(false);
        expect(state.loaded).toEqual(false);
        //   expect(state.entities).toEqual({});
    });

    it('should set selector loading', () => {
        const loading = fromCart.getLoading({
            loading: false,
            loaded: false,
            cartData: []
        });
        expect(loading).toEqual(false);
    });

    it('should set selector loaded', () => {
        const loaded = fromCart.getLoaded({
            loading: false,
            loaded: true,
            cartData: []
        });
        expect(loaded).toEqual(true);
    });

    it('should set selector cart data', () => {
        const data = fromCart.getCartData({
            loading: false,
            loaded: true,
            cartData: []
        });
        expect(data).toEqual([]);
    });
});