import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistasSearch: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

    buscar(value: any){
    console.log(value.value);
    this.loading = true;
    this.spotify.getArtista(value.value)
    .subscribe((data: any) => {
      this.artistasSearch = data;
      // console.log(this.artistasSearch);
      this.loading = false;
    });
    }
}
