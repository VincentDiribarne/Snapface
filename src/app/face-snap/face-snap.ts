import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {SnapFooter} from './snap-footer/snap-footer';
import {FaceSnapModel} from '../../models/face-snap';

@Component({
  imports: [
    NgOptimizedImage,
    SnapFooter
  ],
  selector: 'app-face-snap',
  styleUrl: './face-snap.scss',
  templateUrl: './face-snap.html',
})

export class FaceSnap {
  @Input() faceSnap!: FaceSnapModel;
}
