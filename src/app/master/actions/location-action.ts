import { Loocation } from './../state/master.state';
import { createAction, props } from '@ngrx/store';

export const deleteLocation = createAction(
  '[Location] Delete location',
  props< { locationCode: string } >()
);

export const addLocation = createAction(
  '[Location] Add location',
  props<{ location: Loocation }>()
);
