import {Component, Input} from '@angular/core';
import {Header} from '@/features/profil/components/picture/header/header';
import {Description} from '@/features/profil/components/picture/description/description';
import {NgOptimizedImage} from '@angular/common';
import {ProfileProps} from '@/features/profil/models/user.type';

@Component({
  imports: [
    Header,
    Description,
    NgOptimizedImage
  ],
  selector: 'profile-header-container',
  styleUrl: './header-container.scss',
  templateUrl: './header-container.html',
})

export class HeaderContainer {
  @Input() user!: ProfileProps;
}
