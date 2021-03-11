import { SearchData } from '../models/searchData'

export const SEARCH_DATA_REQUEST = 'Search data';
export const SEARCH_DATA_SUCCESS = 'Search data success';

export class SearchRequestAction {
    readonly type = SEARCH_DATA_REQUEST;
}

export class SearchRequestSuccessAction {
    public type = SEARCH_DATA_SUCCESS;
    constructor(public payload?: { data: SearchData[] }) {
    }
}