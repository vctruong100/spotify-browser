import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from '../../services/spotify.service';
import { TrackListComponent } from '../../components/track-list/track-list.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-artist-page',
  standalone: true,
  imports: [CommonModule, TrackListComponent, CarouselComponent],
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.scss'
})
export class ArtistPageComponent implements OnInit { 
	artistId:string | undefined;
	artist:ArtistData | undefined;
	relatedArtists:ArtistData[] | undefined;
	topTracks:TrackData[] | undefined;
	albums:AlbumData[] | undefined;

  constructor(
    private route: ActivatedRoute,     
    private spotifyService: SpotifyService
  ) { }


  genres: string[] | undefined;

// Initializes the component by fetching the artist's details, top tracks, albums, 
// and related artists based on the artistId from the URL.
  ngOnInit() {
    this.artistId = this.route.snapshot.paramMap.get('id') || ""; 
    if (this.artistId) {
      this.spotifyService.getArtist(this.artistId).then(data => {
        this.artist = data;
        this.genres = data.genres;
    });
      this.spotifyService.getTopTracksForArtist(this.artistId).then(data => this.topTracks = data);
      this.spotifyService.getAlbumsForArtist(this.artistId).then(data => this.albums = data);
      this.spotifyService.getRelatedArtists(this.artistId).then(data => this.relatedArtists = data);
    }
  }

}
