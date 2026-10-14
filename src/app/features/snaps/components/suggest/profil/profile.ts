import {Component, inject, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {UserModel} from '@/features/profil/models/user';
import {Router} from '@angular/router';

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

  router = inject(Router)

  goToProfile(): void {
    this.router.navigate(['/profile', this.user.id]).then(success => {
      if (!success) {
        console.log('Navigation failed');
      }
    });
  }
}
