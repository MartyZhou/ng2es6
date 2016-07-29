import {Control} from 'angular2/common';  
import {Component, EventEmitter} from 'angular2/core';  

import {ArtistDetailComponent} from './artist.detail';

@Component({
  selector: 'spotify-search',
  directives: [ArtistDetailComponent],
  inputs: ['results'],
  outputs: ['searchEvent'],
  template: `
    <h1>Spotify Search</h1>
    <input 
      [ngFormControl]="searchBox" 
      placeholder="Search Spotify artist" />

    <div *ngFor="let artist of results | async">
		  {{ artist.name }} ({{ artist.popularity }})
          <artist-detail [artist]="artist"></artist-detail>
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