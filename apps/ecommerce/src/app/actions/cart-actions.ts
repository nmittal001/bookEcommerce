export const CART_DATA_REQUEST = 'Cart data';
export const CART_DATA_SUCCESS = 'Cart data success';
export const CART_DELETE_DATA_SUCCESS = 'Cart delete data success'

export class CartRequestAction {
    readonly type = CART_DATA_REQUEST;
}

export class CartRequestSuccessAction {
    readonly type = CART_DATA_SUCCESS;
    constructor(public payload?: { data: {} }) {
    }
}

export class CartDeleteSuccessAction {
    readonly type = CART_DELETE_DATA_SUCCESS;
    constructor(public payload = { data: {} }) {
    }
}