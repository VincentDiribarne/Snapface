import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Footer} from './footer/footer';
import {Profile} from './profile/profile';
import {FaceSnapModel} from '../../../models/face-snap';
import {SnapType} from '../../../models/snap-type.type';

@Component({
  imports: [
    NgOptimizedImage,
    Profile,
    Footer
  ],
  selector: 'face-snap',
  styleUrl: './face-snap.scss',
  templateUrl: './face-snap.html',
})

export class FaceSnap implements OnDestroy {
  @Input() faceSnap!: FaceSnapModel;
  @Output() snapChanged = new EventEmitter<SnapType>();

  private interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.faceSnap.updateRelativeDate();

    this.interval = setInterval(() => {
      this.faceSnap.updateRelativeDate();
    }, 60_000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
