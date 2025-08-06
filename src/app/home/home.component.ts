// home.component.ts

import {Component, inject, OnInit} from '@angular/core'

import {RouterLink} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import {OveronsComponent} from '../overons/overons.component'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, OveronsComponent],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>Welkom bij onze Portugese Bakker!</h1>
        <p class="listing-description">Ontdek onze heerlijke traditionele pastelgebakjes, rechtstreeks uit Portugal.</p>
        <a class="hero-button" [routerLink]="['/lekkernijen']">Bekijk onze lekkernijen</a>
      </div>
      <img class="hero-image" src="assets/images/sweetPastel/pasteldenata.jpg" alt="Portugese pasteis">
    </section>
    <section class="promoties" *ngIf="promoties.length">
      <h2>Acties & Aanbiedingen</h2>
      <div class="promo-lijst">
        @for (promo of promoties; track promo.id) {
          <div class="promo-card">
            <h3 class="listing-heading">{{ promo.title }}</h3>
            <p class="listing-description">{{ promo.description }}</p>
            <small>Geldig tot: {{ promo.validUntil }}</small>
          </div>
        }
      </div>
    </section>
    <section class="hero">
      <div class="hero-content">
        <h1>De Portugese bakker wenst je een warm welkom in Turnhout!</h1>
        <p class="listing-description">
          Bij ons proef je de zon van Lissabon in elke hap. Al generaties lang bakken wij met liefde en ambacht de lekkerste pasteis de nata,
          krokant van buiten en zijdezacht van binnen. Onze bakkerij is een plek waar traditie en passie samenkomen.
        </p>
        <p class="listing-description">
          Of je nu op zoek bent naar een snelle zoete pauze of een gezellige babbel met een koffie erbij, onze deuren staan elke dag voor je open.
          Kom langs en ervaar de warmte van Portugal, gewoon hier in het hart van Turnhout.
        </p>
        <a class="hero-button" [routerLink]="['/over-ons']">Lees ons verhaal</a>
      </div>
      <img class="hero-image" src="assets/images/sweetPastel/Areias.jpg" alt="Portugese pasteis">
    </section>
  `,
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  private http = inject(HttpClient);

  promoties: any[] = [];


  ngOnInit(): void {
    this.http.get<any[]>('assets/data/aanbiedingen.json').subscribe(data => {
      this.promoties = data;
    });

  }
}
