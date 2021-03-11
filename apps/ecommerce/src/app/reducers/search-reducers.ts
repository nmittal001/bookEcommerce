import { SearchData } from '../models/searchData';
import { Action } from '../actions';
import { SEARCH_DATA_REQUEST, SEARCH_DATA_SUCCESS } from '../actions/actions';

export interface SearchDataReducerState {
    loading: boolean,
    loaded: boolean,
    searchData: SearchData[]
}

const initialState: SearchDataReducerState = {
    loading: false,
    loaded: false,
    searchData: []
};

export function SeachReducer(state = initialState, action: Action): SearchDataReducerState {
    switch (action.type) {
        case SEARCH_DATA_REQUEST: {
            return { ...state, loading: true }
        }
        case SEARCH_DATA_SUCCESS: {
            const data = action.payload.data;
            return { ...state, loading: false, loaded: true, searchData: data };
        }
        default: { return state }
    }
}

// selector
export const getLoading = (state: SearchDataReducerState) => state.loading;
export const getLoaded = (state: SearchDataReducerState) => state.loaded;
export const getSearchData = (state: SearchDataReducerState) => state.searchData;
