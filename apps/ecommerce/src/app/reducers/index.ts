import { ActionReducerMap } from '@ngrx/store'
import * as fromSearch from './search-reducers'
import * as fromCart from './cart-reducers'
import * as fromBuy from './buy-reducers'
import { createSelector } from '@ngrx/store';


export interface RootReducerState {
    searchData: fromSearch.SearchDataReducerState,
    buyData: fromBuy.BuyDataReducerState,
    cartData: fromCart.CartDataReducerState
};

export const getSearchDataState = (state: RootReducerState) => state.searchData;
export const getCartDataState = (state: RootReducerState) => state.cartData;
export const getBuyDataState = (state: RootReducerState) => state.buyData;


export const getSearchData = createSelector(getSearchDataState, fromSearch.getSearchData);
export const getCartData = createSelector(getCartDataState, fromCart.getCartData);
export const getBuyData = createSelector(getBuyDataState, fromBuy.getBuyData);
export const getLoading = createSelector(getSearchDataState, fromSearch.getLoading);
export const getLoaded = createSelector(getSearchDataState, fromSearch.getLoaded);

export const rootReducer: ActionReducerMap<RootReducerState> = {
    searchData: fromSearch.SeachReducer,
    buyData: fromBuy.BuyReducer,
    cartData: fromCart.CartReducer
};