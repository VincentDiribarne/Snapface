import {Component, Input} from '@angular/core';

@Component({
  imports: [],
  selector: 'profile-description',
  styleUrl: './description.scss',
  templateUrl: './description.html',
})

export class Description {
  @Input() description!: string;
}
