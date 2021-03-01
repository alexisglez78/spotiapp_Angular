import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

    persona: any = {};
    tracks: any = {};
    url = '';
    loading: boolean;
  constructor(private activateRoute: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.loading = true;
    
  this.activateRoute.params.subscribe(params => {
    console.log(params);
  // tslint:disable-next-line: align
  this.getArtista(params['id']);
  this.getTopTracks(params['id']);

   

  });
  }

  getArtista(id: string): any{
this.spotify.getDetalleArtista(id)
.subscribe(artista =>{
  // console.log(artista.external_urls.spotify);
  this.persona = artista;
  this.url = artista.external_urls.spotify;
  this.loading = false;
});
  }

  getTopTracks(id: string): any{
    this.spotify.getTopTracks(id)
    .subscribe(tracks =>{
      console.log(tracks);
      this.tracks = tracks;
      this.loading = false;
    });
  }

}
