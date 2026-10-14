import {Component, inject, Input} from '@angular/core';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {UserModel} from '@/features/profil/models/user';
import {Router} from '@angular/router';

@Component({
  imports: [
    NgOptimizedImage,
    DatePipe
  ],
  selector: 'snap-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})

export class Profile {
  @Input() user!: UserModel
  @Input() createdAt!: Date
  @Input() relativeCreatedAt!: string
  @Input() location?: string

  private router = inject(Router)

  goToProfile(): void {
    this.router.navigate(['/profile', this.user.id]).then(success => {
      if (!success) {
        console.log('Navigation failed');
      }
    });
  }
}
