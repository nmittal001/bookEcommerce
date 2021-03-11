import { Action } from '../actions';
import { BUY_DATA_SUCCESS, BUY_DATA_REQUEST } from '../actions/buy-actions';

export interface BuyDataReducerState {
    loading: boolean,
    loaded: boolean,
    buyData: []
}

const initialState: BuyDataReducerState = {
    loading: false,
    loaded: false,
    buyData: []
};

export function BuyReducer(state = initialState, action: Action): BuyDataReducerState {
    switch (action.type) {
        case BUY_DATA_REQUEST: {
            return { ...state, loading: true }
        }
        case BUY_DATA_SUCCESS: {
            let data = action.payload.data;
            data = [...data, ...state.buyData];
            return { ...state, loading: false, loaded: true, buyData: data };
        }
        default: { return state }
    }
}

// selector
export const getLoading = (state: BuyDataReducerState) => state.loading;
export const getLoaded = (state: BuyDataReducerState) => state.loaded;
export const getBuyData = (state: BuyDataReducerState) => state.buyData;