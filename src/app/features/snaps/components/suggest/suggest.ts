import {Component, inject, OnInit} from '@angular/core';
import {UsersService} from '@/features/profil/services/users.service';
import {UserModel} from '@/features/profil/models/user';
import {Profile} from '@/features/snaps/components/suggest/profil/profile';

@Component({
  imports: [
    Profile
  ],
  selector: 'snap-suggest',
  styleUrl: './suggest.scss',
  templateUrl: './suggest.html',
})

export class Suggest implements OnInit {
  protected suggestions!: UserModel[]
  private userService = inject(UsersService)

  ngOnInit() {
    this.suggestions = this.userService.getOtherUsers();
  }
}
