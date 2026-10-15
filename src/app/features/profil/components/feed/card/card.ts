import {Component, Input, signal} from '@angular/core';
import {FaceSnapModel} from '@/features/snaps/models/face-snap';
import {NgOptimizedImage} from '@angular/common';

@Component({
  imports: [
    NgOptimizedImage
  ],
  selector: 'profile-card',
  styleUrl: './card.scss',
  templateUrl: './card.html',
})

export class Card {
  @Input() snap!: FaceSnapModel

  hovered = signal(false);
}
