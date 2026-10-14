import {Injectable} from '@angular/core';
import {FaceSnapModel, SnapModel} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';

@Injectable({providedIn: 'root'})
export class FaceSnapsService {
  private readonly faceSnaps: FaceSnapModel[]

  constructor() {
    this.faceSnaps = [
      new FaceSnapModel(
        'J’ai eu le plaisir de découvrir le musée du Louvre et ses trésors artistiques. 🖼️ Entre œuvres emblématiques, histoire et architecture exceptionnelle, une visite riche en découvertes et en émerveillement ! ✨\n' +
        '\n' +
        '#Louvre #Art #Culture #Paris #Museum',
        'https://imgs.search.brave.com/RoXV3gbkdQZROXSxBXk3nORpCj6Y1nU6bYoOBjaA2i0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI0/MjI0MDE3Ni9mci9w/aG90by9leHRlcmlv/ci1ldmVuaW5nLXZp/ZXctb2YtdGhlLWxv/dXZyZS1tdXNldW0t/d2l0aC12aXNpdG9y/cy1hbmQtcGVvcGxl/LXRoZS1jb3VyLW5h/cG9sJUMzJUE5b24t/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9YTZYcU1BT2tL/bHE1MkNBeWo3emZE/enpuaF96TWVJR0RB/MTA3U2VuTVVxMD0',
        new Date(),
        new SnapModel(14, 3, 0)
      ).withLocation('Musée du Louvre, Paris'),
      new FaceSnapModel(
        'Mon meilleur ami',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        new SnapModel(10, 0, 1)
      )
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
