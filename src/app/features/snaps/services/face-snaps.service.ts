import {inject, Injectable} from '@angular/core';
import {FaceSnapModel} from '../models/face-snap';
import {SnapType} from '../models/snap.type';
import {UsersService} from '@/features/profil/services/users.service';

@Injectable({providedIn: 'root'})
export class FaceSnapsService {
  private readonly faceSnaps: FaceSnapModel[]
  private userService = inject(UsersService)

  constructor() {
    const pcFaceSnap = this.userService.getUserById("plotdechantier").snaps
    const cFaceSnap = this.userService.getUserById("cyrielle").snaps

    this.faceSnaps = [...pcFaceSnap, ...cFaceSnap]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  getFaceSnaps(): FaceSnapModel[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(id: string): FaceSnapModel {
    const fs = this.faceSnaps.find(fs => fs.id === id)

    if (!fs) {
      throw new Error('FaceSnap not found')
    }

    return fs
  }

  snap(id: string, type: SnapType): void {
    this.getFaceSnapById(id).snap(type)
  }
}
