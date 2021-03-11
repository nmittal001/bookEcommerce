import * as fromSearch from './search-reducers';
import * as fromActions from '../actions/actions';
describe('Search Reducer action', () => {
    it('should set loading to true', () => {
        const action = new fromActions.SearchRequestAction();
        const state = fromSearch.SeachReducer({
            loading: false,
            loaded: false,
            searchData: []
        }, action);
        expect(state.loading).toEqual(true);
        expect(state.loaded).toEqual(false);
    });

    it('should populate success data', () => {
        const action = new fromActions.SearchRequestSuccessAction({ data: [] });
        const state = fromSearch.SeachReducer({
            loading: false,
            loaded: false,
            searchData: []
        }, action);
        expect(state.loaded).toEqual(true);
        expect(state.loading).toEqual(false);
    });

    it('should set default action', () => {
        const action = { type: 'SEARCH_DATA' }
        const state = fromSearch.SeachReducer({
            loading: false,
            loaded: false,
            searchData: []
        }, action);
        expect(state.loading).toEqual(false);
        expect(state.loaded).toEqual(false);
        //   expect(state.entities).toEqual({});
    });

    it('should set default action without state', () => {
        const action = { type: 'SEARCH_DATA' }
        const state = fromSearch.SeachReducer(undefined, action);
        expect(state.loading).toEqual(false);
        expect(state.loaded).toEqual(false);
        //   expect(state.entities).toEqual({});
    });

    it('should set selector loading', () => {
        const loading = fromSearch.getLoading({
            loading: false,
            loaded: false,
            searchData: []
        });
        expect(loading).toEqual(false);
    });

    it('should set selector loaded', () => {
        const loaded = fromSearch.getLoaded({
            loading: false,
            loaded: true,
            searchData: []
        });
        expect(loaded).toEqual(true);
    });

    it('should set selector search data', () => {
        const data = fromSearch.getSearchData({
            loading: false,
            loaded: true,
            searchData: []
        });
        expect(data).toEqual([]);
    });
});