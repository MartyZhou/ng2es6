import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {SpotifyComponent} from './rxjsdemo/spotify.component';

@Component({
    selector: 'my-app',
    directives: [SpotifyComponent],
    providers: [HTTP_PROVIDERS],
    template: '<app-root></app-root>'
})
export class AppComponent{
    
}