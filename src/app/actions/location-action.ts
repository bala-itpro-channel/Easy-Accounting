import * as Models from './../models/models';
export const LOAD_LOCATIONS = 'LOAD_LOCATIONS';
export const LOAD_LOCATIONS_SUCCESS = 'LOAD_LOCATIONS_SUCCESS';
export const DELETE_LOCATION = 'DELETE_LOCATION';

export class LoadLocationsAction {
  readonly type = LOAD_LOCATIONS;
  constructor() { }
}

export class LoadLocationsSuccessAction {
  readonly type = LOAD_LOCATIONS_SUCCESS;
  constructor(public payLoad: Models.Location[]) {
  }
}

export class DeleteLocationAction {
  readonly type = DELETE_LOCATION;
  constructor(public payLoad: string) {
  }
}

export type Action = LoadLocationsAction |
                     LoadLocationsSuccessAction |
                     DeleteLocationAction;
