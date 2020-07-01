import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state';
import { Observable } from 'rxjs';
import { LoadLocationsAction, DeleteLocationAction } from 'src/app/actions/location-action';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.locations$ = this.store.select(state => state.locations);
  }

  ngOnInit() {
    // This action will make a http API call to get the Locations list
    // It will use the initial location value if the below action is not dispatched
    this.store.dispatch(new LoadLocationsAction());
  }

  onDelete(code: string) {
    this.store.dispatch(new DeleteLocationAction(code));
  }

  onRefresh() {
    this.store.dispatch(new LoadLocationsAction());
  }

}
