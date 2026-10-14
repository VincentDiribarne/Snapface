import { Component } from '@angular/core';
import {SnapList} from '../../components/snap-list/snap-list';
import {Suggest} from '../../components/suggest/suggest';

@Component({
  imports: [
    SnapList,
    Suggest
  ],
  selector: 'app-snaps-home',
  styleUrl: './snaps-home.scss',
  templateUrl: './snaps-home.html',
})

export class SnapsHome {}
