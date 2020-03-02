import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as LocationActions from './../actions/location-action';
import { Observable, of } from 'rxjs';
import * as Models from './../models/models';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class LocationEffects {

  constructor(private actions$: Actions) {
  }

  @Effect()
  loadLocations$ = this.actions$.pipe(
    ofType(LocationActions.LOAD_LOCATIONS),
    switchMap( _ => this.getLocations().pipe(
        map(locations => (new LocationActions.LoadLocationsSuccessAction(locations)))
      )
    )
  );

  getLocations(): Observable<Models.Location[]> {
    return of([
      {
        locationCode: '1',
        locationName: 'Location 1'
      },
      {
        locationCode: '2',
        locationName: 'Location 2'
      }
    ]);
  }
}
