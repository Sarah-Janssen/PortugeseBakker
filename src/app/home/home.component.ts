// home.component.ts

import { Component, inject } from '@angular/core';
import { PastelsComponent} from '../pastels/pastels.component'
import {SweetpastelsInfo} from '../sweetpastels'
import {SweetpastelService} from '../sweetpastel.service'
import {RouterLink} from '@angular/router'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PastelsComponent, RouterLink],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search your favorite" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="hero">
      <div class="hero-content">
        <h1>Welkom bij onze Portugese Bakker!</h1>
        <p>Ontdek onze heerlijke traditionele pastelgebakjes, rechtstreeks uit Portugal.</p>
        <a class="hero-button" [routerLink]="['/lekkernijen']">Bekijk onze lekkernijen</a>
      </div>
      <img class="hero-image" src="assets/images/hero-pastel.jpg" alt="Portugese pasteis">
    </section>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {}
