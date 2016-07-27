import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Component, Input, Output, EventEmitter} from 'angular2/core';  
import 'rxjs/Rx';  
import {Observable} from 'rxjs/Observable';  
import {SpotifySearch} from './search.control';

@Component({
  selector: 'app-root',
  directives: [SpotifySearch],
  providers: [HTTP_PROVIDERS],
  template: `
    <spotify-search 
      (searchEvent)="onSearch($event)" 
      [results]="data">
    </spotify-search>
  `
})
export class SpotifyComponent {
  constructor(http) {
      this.http = http;
      this.data = new Observable(observer => this.dataObserver = observer);
  }
  
  static get parameters() {
    return [[Http]];
  }

  onSearch(event) {
    this.http.get(
      'https://api.spotify.com/v1/search?q=' + event + '&type=artist'
      ).map((response) => {
        var artists = response.json();
        return artists.artists.items;
    }).subscribe(result => {
      this.dataObserver.next(result);
    }, error => console.log('Could not load artists'));
  }
}