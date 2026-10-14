import {Component, EventEmitter, inject, Input, OnDestroy, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Footer} from './footer/footer';
import {Profile} from './profile/profile';
import {FaceSnapModel} from '../../../models/face-snap';
import {SnapType} from '../../../models/snap.type';
import {UsersService} from '@/features/profil/services/users.service';
import {UserModel} from '@/features/profil/models/user';

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

  protected user!: UserModel

  private userService = inject(UsersService)
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.faceSnap.updateRelativeDate();
    this.user = this.userService.getUserById(this.faceSnap.userId);

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
