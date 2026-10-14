import {Component, inject, OnInit} from '@angular/core';
import {LinkModel} from '@/models/link-model';
import {Link} from './link/link';
import {NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {UserModel} from '@/features/profil/models/user';
import {UsersService} from '@/features/profil/services/users.service';

@Component({
  imports: [
    Link,
    NgOptimizedImage,
    RouterLink
  ],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})

export class Sidebar implements OnInit {
  protected links!: LinkModel[]
  protected me!: UserModel

  private userService = inject(UsersService);
  private router = inject(Router);

  constructor() {
    this.me = this.userService.me();
  }

  ngOnInit(): void {
    this.links = [
      {label: 'Accueil', routerLink: '', icon: 'home'},
      {label: 'Messages', routerLink: 'messages', icon: 'send'},
      {label: 'Recherche', routerLink: 'search', icon: 'search'}
    ]
  }

  goToProfile(): void {
    this.router.navigate(['/profile', this.me.id]).then(success => {
      if (!success) {
        console.log('Navigation failed');
      }
    });
  }
}
