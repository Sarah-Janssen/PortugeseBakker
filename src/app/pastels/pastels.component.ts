import { Component, input } from '@angular/core';
import {SweetpastelsInfo} from '../sweetpastels'

@Component({
  selector: 'app-pastels',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="pastelsInfo().photo"
        alt="Exterior photo of {{ pastelsInfo().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ pastelsInfo().name }}</h2>
      <p class="listing-description">{{ pastelsInfo().description }}</p>
      <h1 class="listing-price">€ {{ pastelsInfo().price }}</h1>
    </section>
  `,
  styleUrl: './pastels.component.css'
})
export class PastelsComponent {
pastelsInfo = input.required<SweetpastelsInfo>();
}
