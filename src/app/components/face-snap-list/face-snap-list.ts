import {Component, OnInit} from '@angular/core';
import {FaceSnap} from '../face-snap/face-snap';
import {FaceSnapModel} from '../../models/face-snap';
import {FaceSnapsService} from '../../services/face-snaps.service';
import {SnapType} from '../../models/snap-type.type';

@Component({
  imports: [
    FaceSnap
  ],
  selector: 'app-face-snap-list',
  styleUrl: './face-snap-list.scss',
  templateUrl: './face-snap-list.html',
})

export class FaceSnapList implements OnInit {
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
