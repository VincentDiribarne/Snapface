import {Component, Input} from '@angular/core';
import {FaceSnapModel} from '@/features/snaps/models/face-snap';
import {Card} from '@/features/profil/components/feed/card/card';

@Component({
  imports: [
    Card
  ],
  selector: 'profile-feed',
  styleUrl: './feed.scss',
  templateUrl: './feed.html',
})

export class Feed {
  @Input() snaps!: FaceSnapModel[];
}
