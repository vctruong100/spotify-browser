import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { TrackData } from '../../data/track-data';
import { CommonModule } from '@angular/common';
import { TrackListComponent } from '../../components/track-list/track-list.component';


@Component({
  selector: 'app-top-tracks-page',
  standalone: true,
  imports: [CommonModule, TrackListComponent],
  templateUrl: './top-tracks-page.component.html',
  styleUrls: ['./top-tracks-page.component.scss']
})

export class TopTracksPageComponent implements OnInit {
  topTracks: TrackData[] | undefined;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getTopTracks().then(tracks => this.topTracks = tracks);
  }
}
