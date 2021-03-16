import { SearchData } from '../models/searchData'

export const SEARCH_DATA_REQUEST = 'Search data';
export const SEARCH_DATA_SUCCESS = 'Search data success';
export const SEARCH_DATA_FAILED = 'Search data failed';

export class SearchRequestAction {
    readonly type = SEARCH_DATA_REQUEST;
    constructor(public payload: string) { 
    }
}

export class SearchRequestSuccessAction {
    public type = SEARCH_DATA_SUCCESS;
    constructor(public payload?: { data: SearchData[] }) {
    }
}

export class SearchRequestFailedAction {
    readonly type = SEARCH_DATA_FAILED;
    constructor() { }
}