import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { SearchComponent } from '../../components/search/search.component';
import { SpotifyService } from '../../services/spotify.service';
import { TrackData } from '../../data/track-data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AboutComponent, SearchComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  topTracks: TrackData[] | undefined;

  constructor(private spotifyService: SpotifyService) { }

// Fetches the top tracks from Spotify on component initialization 
// and stores them for display.
  ngOnInit() {
    this.spotifyService.getTopTracks().then(tracks => {
      this.topTracks = tracks;
    });
  }

}
