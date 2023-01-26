import { Component } from '@angular/core';
import { Blurb } from './blurb.model';

@Component({
  selector: 'app-blurb-list',
  templateUrl: './blurb-list.component.html',
  styleUrls: ['./blurb-list.component.css'],
})
export class BlurbListComponent {
  blurbs: Blurb[] = [
    new Blurb(
      'Building Furniture',
      'Job Description',
      'Each project at Mountain Woods Furniture began as rough-cut lumber and a page of dimensions. I was responsible for every step of making furniture, from surfacing the wood, to building face frames, and finally creating and adding trim.',
      'Mountain Woods Furniture',
      ['following directions', 'craftsmanship']
    ),
    new Blurb(
      'Inventing SmallTown',
      'Anecdote',
      'After a few months of driving buses, I realized that the current public transit information management system was lacking and that I had found a potential business opportunity. The result of this idea was SmallTown Transit Services LLC, a full-stack SaaS for creating, editing, and proliferating public transit data, including a native app for drivers to see stop-by-stop route information. I love the process of identifying a problem and developing a creative solution.',
      'SmallTown Transit Services LLC',
      ['problem solving', 'innovation']
    ),
    new Blurb(
      'Understanding Webpack',
      'Anecdote',
      'I built SmallTown with separate backend and frontend servers but wanted to combine them for production. I was serving the frontend with Webpack Development Server. This led to confusion about what role Webpack was fulfilling in the project.',
      'SmallTown Transit Services LLC',
      ['problem solving', 'challenge']
    ),
  ];
}
