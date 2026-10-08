import { Component } from '@angular/core';
import {FaceSnapList} from '../../components/face-snap-list/face-snap-list';

@Component({
  imports: [
    FaceSnapList
  ],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})

export class Home {}
