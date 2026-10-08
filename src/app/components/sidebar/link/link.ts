import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LinkModel} from '../../../models/link-model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage
  ],
  selector: 'app-link',
  styleUrl: './link.scss',
  templateUrl: './link.html',
})

export class Link {
  @Input() link!: LinkModel
}
