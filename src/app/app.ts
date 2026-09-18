import {Component, OnInit} from '@angular/core';
import {FaceSnap} from './face-snap/face-snap';
import {FaceSnapModel, SnapModel} from '../models/face-snap';

@Component({
  imports: [FaceSnap],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class App implements OnInit {
  mySnap!: FaceSnapModel;

  ngOnInit(): void {
    this.mySnap = new FaceSnapModel(
      'Thomas',
      'Mon meilleur ami',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new SnapModel(10, 0, 0)
    )
  }
}
