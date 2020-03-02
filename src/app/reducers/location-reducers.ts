import * as LocationActions from './../actions/location-action';

const initLocations = [
  {
    locationCode: '1',
    locationName: 'Chennai'
  },
  {
    locationCode: '2',
    locationName: 'Madurai'
  },
  {
    locationCode: '3',
    locationName: 'Karaikudi'
  }
];

export function LocationReducer(state = initLocations, action: LocationActions.Action) {
  switch (action.type) {
    case LocationActions.LOAD_LOCATIONS_SUCCESS : {
      return action.payLoad;
    }
    case LocationActions.DELETE_LOCATION : {
      return state.filter( s => s.locationCode !== action.payLoad );
    }
    default: {
      return state;
    }
  }
}
