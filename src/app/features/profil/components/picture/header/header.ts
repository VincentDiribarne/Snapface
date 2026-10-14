import {Component, Input} from '@angular/core';
import {ProfileProps} from '@/features/profil/models/user.type';

@Component({
  imports: [],
  selector: 'profile-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})

export class Header {
  @Input() user!: Omit<ProfileProps, "imageURL">
}
