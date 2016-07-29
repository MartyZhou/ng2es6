import {Component} from 'angular2/core';

@Component({
    selector: 'artist-detail',
    inputs: ['artist'],
    template: `
    <h1>{{artist.name}}</h1>
    `
})

export class ArtistDetailComponent{}