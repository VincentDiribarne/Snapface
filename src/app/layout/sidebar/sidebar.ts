import {Component, OnInit} from '@angular/core';
import {LinkModel} from '@/models/link-model';
import {Link} from './link/link';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {UserModel} from '@/features/profil/models/user';
import {UsersService} from '@/features/profil/services/users.service';

@Component({
  imports: [
    Link,
    NgOptimizedImage,
    RouterLinkActive,
    RouterLink
  ],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})

export class Sidebar implements OnInit {
  protected links!: LinkModel[]
  protected me!: UserModel

  constructor(userService: UsersService) {
    this.me = userService.me();
  }

  ngOnInit(): void {
    this.links = [
      {label: 'Accueil', routerLink: '', icon: 'home'},
      {label: 'Messages', routerLink: 'messages', icon: 'send'},
      {label: 'Recherche', routerLink: 'search', icon: 'search'}
    ]
  }
}
