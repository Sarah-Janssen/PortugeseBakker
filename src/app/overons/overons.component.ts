import { Component } from '@angular/core';
import {RouterLink} from '@angular/router'

@Component({
  selector: 'app-overons',
  standalone: true,
  imports: [
    RouterLink,
  ],
  template: `
    <section class="page-hero">
      <h1>Over Ons</h1>
      <p class="intro-text">Van de oven tot jouw tafel – ontdek het verhaal achter onze pasteis.</p>
    </section>

    <section class="content-section">
      <h2>Onze Geschiedenis</h2>
      <p>
        De Portugese Bakker opende zijn deuren in 1995, geïnspireerd door grootmoeders familierecept uit Belem.
        Wat begon als een kleine winkel groeide uit tot een geliefd adres voor liefhebbers van authentieke Portugese gebakjes.
      </p>
    </section>

    <section class="content-section">
      <h2>Onze Waarden</h2>
      <ul>
        <li><strong>Ambacht:</strong> Alles wordt vers bereid met traditionele recepten.</li>
        <li><strong>Kwaliteit:</strong> Alleen de beste ingrediënten uit Portugal en België.</li>
        <li><strong>Gastvrijheid:</strong> Elke klant wordt onthaald als familie.</li>
      </ul>
    </section>

    <section class="content-section team-section">
      <h2>Ons Team</h2>
      <div class="team-grid">
        <figure>
          <img src="assets/images/team/maria.jpg" alt="Maria, onze meesterbakker">
          <figcaption>Maria – meesterbakker & oprichtster</figcaption>
        </figure>
        <figure>
          <img src="assets/images/team/joao.jpg" alt="João, onze barista">
          <figcaption>João – barista & sfeerbrenger</figcaption>
        </figure>
      </div>
    </section>

    <section class="testimonial-section">
      <h2>Wat onze klanten zeggen</h2>
      <blockquote>
        “Elke keer dat ik hier binnenstap, voelt het alsof ik even op vakantie ben in Portugal.” – Koen V.
      </blockquote>
    </section>

  `,
  styleUrl: './overons.component.css'
})
export class OveronsComponent {

}


