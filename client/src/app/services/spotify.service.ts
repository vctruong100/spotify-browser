import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ArtistData } from '../data/artist-data';
import { AlbumData } from '../data/album-data';
import { TrackData } from '../data/track-data';
import { ResourceData } from '../data/resource-data';
import { ProfileData } from '../data/profile-data';
import { TrackFeature } from '../data/track-feature';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
	expressBaseUrl:string = 'http://localhost:8888';

  constructor(private http:HttpClient) { }

  private sendRequestToExpress(endpoint:string):Promise<any> {
    var uri:string = `${this.expressBaseUrl}${endpoint}`;
    return firstValueFrom(this.http.get(uri)).then((response) => {
      return response;
    }, (err) => {
      return Promise.reject(err);
    });
  }
  

  aboutMe():Promise<ProfileData> {
    //This line is sending a request to express, which returns a promise with some data. We're then parsing the data 
    return this.sendRequestToExpress('/me').then((data) => {
      return new ProfileData(data);
    });
  }

  searchFor(category: string, resource: string): Promise<ResourceData[]> {
    const encodedResource = encodeURIComponent(resource);
    return this.sendRequestToExpress(`/search/${category}/${encodedResource}`).then((data) => {
      switch (category) {
        case 'artist':
          return data.artists.items.map((item: any) => new ArtistData(item));
        case 'album':
          return data.albums.items.map((item: any) => new AlbumData(item));
        case 'track':
          return data.tracks.items.map((item: any) => new TrackData(item));
        default:
          return [];
      }
    });
  }
  
  
  getArtist(artistId: string): Promise<ArtistData> {
    const artistEndpoint = `/artist/${encodeURIComponent(artistId)}`;
    return this.sendRequestToExpress(artistEndpoint).then(data => new ArtistData(data));
  }

  getRelatedArtists(artistId: string): Promise<ArtistData[]> {
    const endpoint = `/related-artists/${encodeURIComponent(artistId)}`;
    return this.sendRequestToExpress(endpoint).then(data => data.artists.map((item: any) => new ArtistData(item)));
  }

  getTopTracksForArtist(artistId: string, country: string): Promise<TrackData[]> {
    const endpoint = `/top-tracks/${encodeURIComponent(artistId)}?country=${country}`;
    return this.sendRequestToExpress(endpoint).then(data => data.tracks.map((item: any) => new TrackData(item)));
  }

  getAlbumsForArtist(artistId: string): Promise<AlbumData[]> {
    const endpoint = `/albums/${encodeURIComponent(artistId)}`;
    return this.sendRequestToExpress(endpoint).then(data => data.items.map((item: any) => new AlbumData(item)));
  }

  getAlbum(albumId: string): Promise<AlbumData> {
    const endpoint = `/album/${encodeURIComponent(albumId)}`;
    return this.sendRequestToExpress(endpoint).then(data => new AlbumData(data));
  }

  getTracksForAlbum(albumId: string): Promise<TrackData[]> {
    const endpoint = `/album-tracks/${encodeURIComponent(albumId)}`;
    return this.sendRequestToExpress(endpoint).then(data => data.items.map((item: any) => new TrackData(item)));
  }

  getTrack(trackId: string): Promise<TrackData> {
    const endpoint = `/track/${encodeURIComponent(trackId)}`;
    return this.sendRequestToExpress(endpoint).then(data => new TrackData(data));
  }

  getAudioFeaturesForTrack(trackId: string): Promise<TrackFeature[]> {
    const endpoint = `/track-features/${encodeURIComponent(trackId)}`;
    return this.sendRequestToExpress(endpoint).then(data => data.map((item: any) => new TrackFeature(item.feature, item.percent)));
  }
}
