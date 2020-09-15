import * as AppState from './../../state/state';
// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
  locations: LocationState;
}

export interface LocationState {
  lastDeletedLocation: string | null;
  locationList: Loocation[];
}

export interface Loocation {
  locationCode: string;
  locationName: string;
}
