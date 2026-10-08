import {Injectable} from '@angular/core';
import {FaceSnapModel, SnapModel} from '../models/face-snap';
import {UsersService} from './users.service';
import {SnapType} from '../models/snap-type.type';

@Injectable({providedIn: 'root'})
export class FaceSnapsService {
  private readonly faceSnaps: FaceSnapModel[]

  constructor(userService: UsersService) {
    this.faceSnaps = [
      new FaceSnapModel(
        userService.random(),
        'Mon meilleur ami',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        new SnapModel(10, 0, 0)
      ),
      new FaceSnapModel(
        userService.random(),
        'Mon doudou',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        new SnapModel(14, 0, 0)
      ).withLocation('Musée du Louvre, Paris')
    ]
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
