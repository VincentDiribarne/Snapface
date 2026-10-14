import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {UserModel} from '@/features/profil/models/user';

@Component({
  imports: [
    NgOptimizedImage
  ],
  selector: 'suggest-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})

export class Profile {
  @Input() user!: UserModel
  @Input() alreadyFollowed!: boolean
}
