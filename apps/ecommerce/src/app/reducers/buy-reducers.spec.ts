import * as fromBuy from './buy-reducers';
import * as fromActions from '../actions/buy-actions';
describe('Buy Reducer action', () => {
    it('should set loading to true', () => {
        const action = new fromActions.BuyRequestAction();
        const state = fromBuy.BuyReducer({
            loading: false,
            loaded: false,
            buyData: []
        }, action);
        expect(state.loading).toEqual(true);
        expect(state.loaded).toEqual(false);
        //   expect(state.entities).toEqual({});
    });

    it('should populate success data', () => {
        const action = new fromActions.BuyRequestSuccessAction({ data: 'data' });
        const state = fromBuy.BuyReducer({
            loading: false,
            loaded: false,
            buyData: []
        }, action);
        expect(state.loaded).toEqual(true);
        expect(state.loading).toEqual(false);
        // expect(state.entities).toEqual(entities);
    });

    it('should set default action', () => {
        const action = { type: 'BUY_DATA' }
        const state = fromBuy.BuyReducer({
            loading: false,
            loaded: false,
            buyData: []
        }, action);
        expect(state.loading).toEqual(false);
        expect(state.loaded).toEqual(false);
        //   expect(state.entities).toEqual({});
    });

    it('should set default action without state', () => {
        const action = { type: 'BUY_DATA' }
        const state = fromBuy.BuyReducer(undefined, action);
        expect(state.loading).toEqual(false);
        expect(state.loaded).toEqual(false);
        //   expect(state.entities).toEqual({});
    });

    it('should set selector loading', () => {
        const loading = fromBuy.getLoading({
            loading: false,
            loaded: false,
            buyData: []
        });
        expect(loading).toEqual(false);
    });

    it('should set selector loaded', () => {
        const loaded = fromBuy.getLoaded({
            loading: false,
            loaded: true,
            buyData: []
        });
        expect(loaded).toEqual(true);
    });

    it('should set selector buy data', () => {
        const data = fromBuy.getBuyData({
            loading: false,
            loaded: true,
            buyData: []
        });
        expect(data).toEqual([]);
    });
});