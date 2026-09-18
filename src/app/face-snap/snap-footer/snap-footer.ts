import {Component, Input} from '@angular/core';
import {SnapModel} from '../../../models/face-snap';

@Component({
  imports: [],
  selector: 'app-snap-footer',
  styleUrl: './snap-footer.scss',
  templateUrl: './snap-footer.html',
})

export class SnapFooter{
  @Input() snapModel!: SnapModel

  protected userHasClicked: boolean = false;

  onAddSnap(): void {
    this.userHasClicked ? this.unSnap() : this.snap();
  }

  unSnap(): void {
    this.snapModel.removeSnap()
    this.userHasClicked = false;
  }

  snap(): void {
    this.snapModel.addSnap()
    this.userHasClicked = true;
  }
}
