import {Component, OnInit} from '@angular/core';
import {FaceSnap} from './face-snap/face-snap';
import {FaceSnapModel, SnapModel, UserSnapModel} from '../models/face-snap';

@Component({
  imports: [FaceSnap],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class App implements OnInit {
  me!: UserSnapModel
  faceSnaps!: FaceSnapModel[]

  ngOnInit(): void {
    this.me = new UserSnapModel('MisterVinvin', 'https://cdn.discordapp.com/avatars/356474760655536139/a_ccde2d38c3f6df23b2312da5f258eeb9.webp?size=40')

    this.faceSnaps = [
      new FaceSnapModel(
        1,
        this.me,
        'Mon meilleur ami',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        new SnapModel(10, 0, 0)
      ),
      new FaceSnapModel(
        2,
        this.me,
        'Mon doudou',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        new SnapModel(14, 0, 0)
      )
    ]

    this.faceSnaps[1].setLocation("Musée du Louvre, Paris")
  }
}
