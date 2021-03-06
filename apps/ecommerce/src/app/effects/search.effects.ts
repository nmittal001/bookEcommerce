import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { HttpClientService } from "../services/http-client.service";
import * as SearchActions from '../actions/actions';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClientService,
  ) { }

  loadBook$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.SEARCH_DATA_REQUEST),
    mergeMap((SearchRequestOb) => this.httpClient.get(SearchRequestOb)
      .pipe(
        map(book => ({
          type: SearchActions.SEARCH_DATA_SUCCESS,
          payload: { data: book.items }
        })),
        catchError((err) => [{
          type: SearchActions.SEARCH_DATA_FAILED,
          payload: {}
        }])
      )
    ))
  );
}