import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { Observable, throwError } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';

import { HttpClientService } from '../services/http-client.service';
import { SearchEffects } from './search.effects';
import * as SearchActions from '../actions/actions';
import { SearchData } from '../models/searchData';

describe('BookEffects', () => {
    let db: any;
    let effects: SearchEffects;
    let actions$: Observable<any>;
    let httpClient: HttpClientService;
    const book = { items: {} } as SearchData;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockActions(() => actions$),
                SearchEffects,
                {
                    provide: HttpClientService,
                    useValue: {
                        get: jest.fn(),
                    },
                }
            ],
        });
        db = TestBed.inject(HttpClientService);
        effects = TestBed.inject(SearchEffects);
        actions$ = TestBed.inject(Actions);
    });

    describe('searchBooks successfully', () => {
        it('should return a book collection on success', () => {
            const action = new SearchActions.SearchRequestAction('angular');
            actions$ = hot('-a', { a: action });
            const response = cold('-a|', { a: book });
            const expected = cold('--a', {
                a: {
                    type: SearchActions.SEARCH_DATA_SUCCESS,
                    payload: { data: book.items },
                },
            });
            db.get = jest.fn(() => response);
            expect(effects.loadBook$).toBeObservable(expected);
        });

        it('should return a book collection on error', () => {
            const action = new SearchActions.SearchRequestAction('angular');
            const errors: any = throwError((new Error('Network error')));
            actions$ = hot('-a', { a: action });
            const expected = cold('-a', {
                a: {
                    "payload": {},
                    "type": "Search data failed",
                }
            });
            db.get = jest.fn(() => errors);
            expect(effects.loadBook$).toBeObservable(expected);
        });
    });
});
