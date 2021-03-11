export const BUY_DATA_REQUEST = 'Buy data';
export const BUY_DATA_SUCCESS = 'Buy data success';

export class BuyRequestAction {
    readonly type = BUY_DATA_REQUEST;
}

export class BuyRequestSuccessAction {
    readonly type = BUY_DATA_SUCCESS;
    constructor(public payload?: { data: {} }) {
    }
}