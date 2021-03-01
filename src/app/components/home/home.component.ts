import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    lanzamientos: any[] = [];
    loading: boolean;
    error = false;
    mensajeError: string;

  
  constructor(private spotify: SpotifyService) { 
    this.loading = true;

    // this.cliente.get('https://restcountries.eu/rest/v2/lang/es')
    // .subscribe((data: any) =>{
    //   this.paises = data;
    //   console.log(this.paises);
    // });
  }

  ngOnInit(): any {
  this.spotify.getNewReleases()
  .subscribe((data: any) => {
    this.lanzamientos = data;
    this.loading = false;
    // console.log(this.lanzamientos);
  }, (errorServicio) => {
    console.log(errorServicio.error.error.message);
    this.error = true;
    this.loading = false;
    this.mensajeError = errorServicio.error.error.message;
  } );
  }

}
// https://accounts.spotify.com/api/token
// https://api.spotify.com/v1/browse/new-releases 
