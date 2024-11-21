
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileService } from '../../data/servicies/profile.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  providers: [
    HttpClient
  ],
})
export class SearchPageComponent {
  ProfileService = inject(ProfileService)
  profiles: Profile[] = [];
  constructor() {
    this.ProfileService.getTestAccounts()
    .subscribe((val: Profile[]) => {
      this.profiles = val;
    });
  }
}
