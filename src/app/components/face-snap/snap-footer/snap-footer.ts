import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SnapModel} from '../../../models/face-snap';
import {SnapType} from '../../../models/snap-type.type';

@Component({
  imports: [],
  selector: 'app-snap-footer',
  styleUrl: './snap-footer.scss',
  templateUrl: './snap-footer.html',
})

export class SnapFooter {
  @Input() snapModel!: SnapModel
  @Output() snapChanged = new EventEmitter<SnapType>()

  protected userHasClicked: boolean = false;

  onAddSnap(): void {
    this.userHasClicked ? this.unSnap() : this.snap();
  }

  unSnap(): void {
    this.userHasClicked = false;
    this.snapChanged.emit('unsnap')
  }

  snap(): void {
    this.userHasClicked = true;
    this.snapChanged.emit('snap')
  }
}
