import {Component, OnInit} from '@angular/core';
import {FaceSnapModel} from '../../models/face-snap';
import {FaceSnapsService} from '../../services/face-snaps.service';
import {SnapType} from '../../models/snap.type';
import {FaceSnap} from './face-snap/face-snap';

@Component({
  imports: [
    FaceSnap
  ],
  selector: 'snap-list',
  styleUrl: './snap-list.scss',
  templateUrl: './snap-list.html',
})

export class SnapList implements OnInit {
  faceSnaps!: FaceSnapModel[]

  constructor(private faceSnapService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getFaceSnaps();
  }

  onSnapChanged(id: string, type: SnapType) {
    this.faceSnapService.snap(id, type)
  }
}
