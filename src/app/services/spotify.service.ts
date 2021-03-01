import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQA2llM4ytKVKKaw_aRgh6wAyKdLVMNbttl2LGva7hfiESZYWR4mZzkS67rwYzaqB4bd7EUs04R56_62wKM';

  constructor( private http: HttpClient) {
    // console.log('listo');
  }
  getNewReleases(): any{

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
      // Authorization: 'Bearer BQAlr101E5W7Sxn5Mr3dNvr9LJfh6FQB1TNYWrmh46uzDt3E9EYDXwouWf1zDxvemv8LNyScBOw0fnG_B-8'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .pipe(map(data => {
      return data[ 'albums' ].items;
    }));
  }

  getArtista(termino: string): any{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
      // Authorization: 'Bearer BQAlr101E5W7Sxn5Mr3dNvr9LJfh6FQB1TNYWrmh46uzDt3E9EYDXwouWf1zDxvemv8LNyScBOw0fnG_B-8'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    .pipe(map(data => data['artists'].items));
  
  }

  getDetalleArtista(id: string): any{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
      // Authorization: 'Bearer BQAlr101E5W7Sxn5Mr3dNvr9LJfh6FQB1TNYWrmh46uzDt3E9EYDXwouWf1zDxvemv8LNyScBOw0fnG_B-8'
    });
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {headers})
    .pipe(map(data => data
       ));
  
  }
  getTopTracks(id: string): any{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
      // Authorization: 'Bearer BQAlr101E5W7Sxn5Mr3dNvr9LJfh6FQB1TNYWrmh46uzDt3E9EYDXwouWf1zDxvemv8LNyScBOw0fnG_B-8'
    });
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`, {headers})
    .pipe(map(data => data['tracks']
       ));
  
  }


}
