import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {ArtistService} from './artist.service';
import {SpotifySearch} from './search.control';

@Component({
  selector: 'app-root',
  directives: [SpotifySearch],
  providers: [ArtistService],
  template: `
    <spotify-search 
      (searchEvent)="onSearch($event)" 
      [results]="data">
    </spotify-search>
  `
})
export class SpotifyComponent {
  constructor(artistService) {
      this.artistService = artistService;
      this.data = new Observable(observer => this.dataObserver = observer);
      this.artists = [];
  }
  
  static get parameters() {
    return [[ArtistService]];
  }

  onSearch(event) {
    this.artistService
        .search(event)
        .subscribe(result => {
            this.dataObserver.next(result);
            }, error => console.log('Could not load artists'));
  }
}