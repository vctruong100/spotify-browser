import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ProfileData } from '../../data/profile-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent implements OnInit {
  name:string | undefined;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string | undefined;

  //inject the Spotify service
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  /*Create a function which gets the "about me" information from Spotify when the button in the view is clicked.*/
  loadAboutMeInfo() {
    this.spotifyService.aboutMe().then((profileData: ProfileData) => {
      this.name = profileData.name;
      this.profile_pic = profileData.imageURL; 
      this.profile_link = profileData.spotifyProfile;
      console.log("Profile data", profileData);
    }).catch(error => {
      console.error("Error fetching profile information", error);
    });
  }
}