// home.component.ts

import {Component, inject, OnInit} from '@angular/core'
import { PastelsComponent} from '../pastels/pastels.component'
import {RouterLink} from '@angular/router'
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PastelsComponent, RouterLink, CommonModule],
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
