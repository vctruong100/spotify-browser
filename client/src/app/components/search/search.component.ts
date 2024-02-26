import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { TrackListComponent } from '../track-list/track-list.component';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, CarouselComponent, TrackListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  providers: [ SpotifyService ]
})

export class SearchComponent implements OnInit {
  searchString: string | undefined;
  searchCategory: string = 'artist';
  searchCategories: string[] = ['artist', 'album', 'track'];
  resources: ResourceData[] | undefined;
  tracks: TrackData[] | undefined; // Add this if you need a separate property for tracks

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search() {
    if (this.searchString) {
      this.spotifyService.searchFor(this.searchCategory, this.searchString).then((response) => {
        if (this.searchCategory === 'track') {
          // Cast the response to TrackData[]
          this.tracks = response as TrackData[];
        } else {
          // Cast the response to ResourceData[]
          this.resources = response as ResourceData[];
        }
      }).catch((error) => {
        console.error('Search error:', error);
      });
    }
  }
}