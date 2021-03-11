import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { getLoading, getSearchData, RootReducerState, getCartData, getBuyData } from '../reducers';
import { SearchRequestAction, SearchRequestSuccessAction } from '../actions/actions';
import { CartRequestSuccessAction } from '../actions/cart-actions';
import { CartDeleteSuccessAction } from '../actions/cart-actions';
import { BuyRequestSuccessAction } from '../actions/buy-actions'


@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(
    private store: Store<RootReducerState>,
  ) { }

  getSearhData() {
    return this.store.select(getSearchData);
  }

  searchRequestAction() {
    return this.store.dispatch(new SearchRequestAction());
  }

  searchRequestSuccessAction(data) {
    return this.store.dispatch(new SearchRequestSuccessAction({ data: data.items }));
  }

  getLoading() {
    return this.store.select(getLoading);
  }

  cartRequestSuccessAction(searchInfo) {
    return this.store.dispatch(new CartRequestSuccessAction({ data: searchInfo }));
  }

  getCartData() {
    return this.store.select(getCartData);
  }

  cartRemoveSuccessAction(info) {
    this.store.dispatch(new CartDeleteSuccessAction({ data: [info] }));
  }

  cartDeleteSuccessAction() {
    this.store.dispatch(new CartDeleteSuccessAction({ data: [] }));
  }

  getBuyData() {
    return this.store.select(getBuyData);
  }

  buyRequestSuccessAction(buyItems, form) {
    this.store.dispatch(new BuyRequestSuccessAction({
      data: [
        { buy: buyItems, info: { name: form.value.name, email: form.value.email, phone: form.value.phone, address: form.value.address } }
      ]
    }));
  }
}
