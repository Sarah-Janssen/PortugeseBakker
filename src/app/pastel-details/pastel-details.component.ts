// pastel-details.component.ts
import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SweetpastelService } from '../sweetpastel.service';
import {SweetpastelsInfo} from '../sweetpastels';

@Component({
  selector: 'app-pastel-details',
  standalone: true,
  imports: [],
  template: ` <article>
    <img
      class="listing-photo"
      [src]="sweetPastel?.photo"
      alt="Exterior photo of {{ sweetPastel?.name }}"
      crossorigin
    />
    <section >
      <h2 class="listing-heading">{{ sweetPastel?.name }}</h2>

    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this delicious pastel</h2>
      <ul>
        <p class="listing-description">{{ sweetPastel?.description }}</p>
        <li class="listing-price">Price: {{ sweetPastel?.price }}</li>

      </ul>
    </section>
  </article>
  `,
  styleUrl: './pastel-details.component.css'
})
export class PastelDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  sweetpastelService = inject(SweetpastelService);
  sweetPastel: SweetpastelsInfo | undefined;
  constructor() {
    const sweetPastelId = Number(this.route.snapshot.params['id']);
    this.sweetPastel = this.sweetpastelService.getSweetPastelById(sweetPastelId);
  }
}
