import { Component, Input } from '@angular/core';
import { Blurb } from '../blurb.model';

@Component({
  selector: 'app-blurb',
  templateUrl: './blurb.component.html',
  styleUrls: ['./blurb.component.css'],
})
export class BlurbComponent {
  @Input() blurb: Blurb;
}
