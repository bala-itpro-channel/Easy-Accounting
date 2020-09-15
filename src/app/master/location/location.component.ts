import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppState from './../../state/state';
import { Observable } from 'rxjs';
import { LocationState, Loocation } from '../state/master.state';
import { State } from './../state/master.state';
import { getLocations } from '../reducers/location-reducers';
// import { LoadLocationsAction, DeleteLocationAction } from 'src/app/actions/location-action';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations: Loocation[] | null;
  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.select(getLocations).subscribe(
      locationList => {
        this.locations = locationList;
      }
    );
    // This action will make a http API call to get the Locations list
    // It will use the initial location value if the below action is not dispatched
    // this.store.dispatch(new LoadLocationsAction());
  }

  onDelete(code: string) {
    // this.store.dispatch(new DeleteLocationAction(code));
  }

  onRefresh() {
    // this.store.dispatch(new LoadLocationsAction());
  }

}
