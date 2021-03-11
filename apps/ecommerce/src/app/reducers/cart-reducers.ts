import { Action } from '../actions';
import { CART_DATA_REQUEST, CART_DATA_SUCCESS, CART_DELETE_DATA_SUCCESS } from '../actions/cart-actions';

export interface CartDataReducerState {
    loading: boolean,
    loaded: boolean,
    cartData: any
}

const initialState: CartDataReducerState = {
    loading: false,
    loaded: false,
    cartData: [],
};

export function CartReducer(state = initialState, action: Action): CartDataReducerState {
    switch (action.type) {
        case CART_DATA_REQUEST: {
            return { ...state, loading: true }
        }
        case CART_DATA_SUCCESS: {
            let dataPresent = state.cartData.filter((item) => item.id === action.payload.data[0].id);
            let data = dataPresent.length == 0 ? [...state.cartData, ...action.payload.data] : state.cartData;
            return { ...state, loading: false, loaded: true, cartData: data };
        }
        case CART_DELETE_DATA_SUCCESS: {
            let data = []
            if (action.payload.data.length > 0) {
                data = state.cartData.filter((item) => item.id !== action.payload.data[0].id);
            } else {
                data = [];
            }
            return { ...state, loading: false, loaded: true, cartData: data };
        }
        default: { return state }
    }
}

// selector
export const getLoading = (state: CartDataReducerState) => state.loading;
export const getLoaded = (state: CartDataReducerState) => state.loaded;
export const getCartData = (state: CartDataReducerState) => state.cartData;