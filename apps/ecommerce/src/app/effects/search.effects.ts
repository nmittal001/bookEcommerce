import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { EMPTY, from } from 'rxjs';
import { HttpClientService } from "../services/http-client.service";

import * as SearchActions from '../actions/actions';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClientService,
  ) { }

  // loadBooks$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SearchActions.SEARCH_DATA_REQUEST),
  //     mergeMap((searchText) => {
  //       return from(
  //         this.httpClient.get(
  //           JSON.parse(JSON.stringify(searchText)).payload
  //         )
  //       )
  //       .pipe (
  //         mergeMap((list) => [
  //           {
  //             type: SearchActions.SEARCH_DATA_SUCCESS,
  //             payload: {data: list.items},
  //           },
  //         ])
  //       );
  //     })
  //   )
  // );
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.SEARCH_DATA_REQUEST),
    mergeMap((SearchRequestObj) => this.httpClient.get(SearchRequestObj)
      .pipe(
        map(movies => ({ type: SearchActions.SEARCH_DATA_SUCCESS,
              payload: {data: movies.items} })),
              catchError((err) => [{ type: SearchActions.SEARCH_DATA_FAILED,
                payload: {} }])
      ))
    )
  );

  // getAttendees$ = this.actions$.pipe(
  //   ofType(SearchActions.SEARCH_DATA_REQUEST),
  //   switchMap((action) =>
  //     this.httpClient.get(
  //       JSON.parse(JSON.stringify(action)).payload
  //     ).pipe(
  //       map((attendees) => [{
  //         type: SearchActions.SEARCH_DATA_SUCCESS,
  //         payload: { data: attendees.items },
  //       }]
  //       )
  //     )
  //   ));
}
