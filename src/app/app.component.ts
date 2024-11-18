import { ProfileService } from './data/servicies/profile.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfileCardComponent } from "./common-ui/profile-card/profile-card.component";
import { Profile } from './data/interfaces/profile.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    HttpClient
  ],
  imports: [RouterOutlet, ProfileCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent  {
  ProfileService = inject(ProfileService)
  profiles: Profile[] = [];
  constructor() {
    this.ProfileService.getTestAccounts()
    .subscribe( val => {
      this.profiles = [val]
    })
  }
}
