import {Component} from 'angular2/core';
import {SpotifyComponent} from './rxjsdemo/spotify.component';

@Component({
    selector: 'my-app',
    directives: [SpotifyComponent],
    template: '<app-root></app-root>'
})
export class AppComponent{
    
}