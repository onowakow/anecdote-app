import { Component } from '@angular/core';
import { Blurb } from '../blurb-list/blurb.model';

@Component({
  selector: 'app-blurb-form',
  templateUrl: './blurb-form.component.html',
  styleUrls: ['./blurb-form.component.css'],
})
export class BlurbFormComponent {
  blurb: Blurb = new Blurb('', '', '', '');

  clearBlurb() {
    this.blurb = new Blurb('', '', '', '');
  }
}
