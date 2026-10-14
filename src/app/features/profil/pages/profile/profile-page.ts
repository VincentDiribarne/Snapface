import {Component, computed, inject, input, Signal} from '@angular/core';
import {UsersService} from '@/features/profil/services/users.service';
import {Feed} from '@/features/profil/components/feed/feed';
import {HeaderContainer} from '@/features/profil/components/picture/header-container';

import {UserModel} from '@/features/profil/models/user';

@Component({
  imports: [
    Feed,
    HeaderContainer,
  ],
  selector: 'app-profile',
  styleUrl: './profile-page.scss',
  templateUrl: './profile-page.html',
})

export class ProfilePage {
  id = input.required<string>();
  user: Signal<UserModel>
  private userService = inject(UsersService)

  constructor() {
    this.user = computed(() => this.userService.getUserById(this.id()));
  }
}
