import { Component } from '@angular/core';
import { PastelsComponent} from '../pastels/pastels.component'
import {SweetpastelsInfo} from '../sweetpastels'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PastelsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search your favorite" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-pastels [pastelsInfo]="sweetPastels"></app-pastels>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
sweetPastels : SweetpastelsInfo = {
  id: 1,
  name: 'Pastel de Nata',
  photo: './assets/images/pasteldenata.jpg',
  description:'De lekkerste van Portugal!',
  price: 3,
};
}
