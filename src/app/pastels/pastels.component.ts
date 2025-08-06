// pastels.component.ts
import { Component, input } from '@angular/core';
import {SweetpastelsInfo} from '../sweetpastels'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pastels',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="pastelsInfo().photo"
        alt="Exterior photo of {{ pastelsInfo().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ pastelsInfo().name }}</h2>
      <h1 class="listing-price">€ {{ pastelsInfo().price }}</h1>
      <a class="button" [routerLink]="['/pastelDetails', pastelsInfo().id]" >Lees meer</a>
    </section>
  `,
  styleUrl: './pastels.component.css'
})
export class PastelsComponent {
pastelsInfo = input.required<SweetpastelsInfo>();
}
