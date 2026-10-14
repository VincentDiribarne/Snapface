import {Component, effect, inject, input} from '@angular/core';
import {UsersService} from '@/features/profil/services/users.service';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile-page.scss',
  templateUrl: './profile-page.html',
})

export class ProfilePage {
  private userService = inject(UsersService)
  id = input.required<string>();

  constructor() {
    effect(() => this.userService.getUserById(this.id()))
  }
}
