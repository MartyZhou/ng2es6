import {Control, FORM_DIRECTIVES} from 'angular2/common';  
import {Component, Output, Input, EventEmitter} from 'angular2/core';  
import 'rxjs/Rx';

@Component({
  selector: 'spotify-search',
  directives: [FORM_DIRECTIVES],
  inputs: ['results'],
  outputs: ['searchEvent'],
  template: `
    <h1>Spotify Search</h1>
    <input 
      [ngFormControl]="searchBox" 
      placeholder="Search Spotify artist" />

    <div *ngFor="let artists of results | async">
      {{ artists.name }} -- Popularity {{ artists.popularity }}
    </div>
  `
})
export class SpotifySearch {
  
  constructor() {
    this.searchBox = new Control();
    this.searchEvent = new EventEmitter();
    
    this.searchBox
        .valueChanges
        .debounceTime(200)
        .subscribe((event) => this.searchEvent.emit(event));
  }
}