import {Component, Input} from '@angular/core';
import {UserSnapModel} from '../../../models/face-snap';
import {DatePipe, LowerCasePipe, NgOptimizedImage} from '@angular/common';

@Component({
  imports: [
    NgOptimizedImage,
    LowerCasePipe,
    DatePipe
  ],
  selector: 'app-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})

export class Profile {
  @Input() user!: UserSnapModel
  @Input() createdAt!: Date
  @Input() relativeCreatedAt!: string
  @Input() location?: string
}
