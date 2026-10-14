import {Component, Input} from '@angular/core';
import {DatePipe, LowerCasePipe, NgOptimizedImage} from '@angular/common';
import {UserModel} from '@/features/profil/models/user';

@Component({
  imports: [
    NgOptimizedImage,
    LowerCasePipe,
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
}
