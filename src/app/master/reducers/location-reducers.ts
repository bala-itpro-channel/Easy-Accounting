import { LocationState } from '../state/master.state';
import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as LocationActions from './../actions/location-action';
import { createFeatureReducerFactory } from '@ngrx/store/src/utils';

const initialState: LocationState = {
  lastDeletedLocation: null,
  locationList: [
    {
      locationCode: 'A',
      locationName: 'Location A'
    },
    {
      locationCode: 'B',
      locationName: 'Location B'
    }
  ]
};

export const locationReducer = createReducer<LocationState> (
  initialState,
  on(LocationActions.deleteLocation, (state, action): LocationState => {
    return {
      ...state,
      lastDeletedLocation: action.locationCode
    };
  })
);


const getLocationFeatureState = createFeatureSelector<LocationState>('locations');

export const getLocations = createSelector(
  getLocationFeatureState,
  state => state.locationList
);
