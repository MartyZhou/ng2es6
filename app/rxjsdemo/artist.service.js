import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class ArtistService{
    constructor(http){
        this.http = http;
    }
    
    static get parameters(){
        return [[Http]];
    }
    
    search(name){
        return this.http.get(
                    'https://api.spotify.com/v1/search?q=' + name + '&type=artist'
               )
                    .map((response) => {
                    var artists = response.json();
                    return artists.artists.items;
               });
    }
}