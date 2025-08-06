// app.component.ts

import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink],
  template: `
    <main>
      <header class="navbar">
      <a [routerLink]="['/']" >
      <div class="brand-name">
        <img class="brand-logo" src="/assets/LogoPB.png" alt="logo" aria-hidden="true" />
      </div>
      </a>
        <a [routerLink]="['/']" routerLinkActive="active" class="nav-link">Home</a>
        <a [routerLink]="['lekkernijen']" class="nav-link">Lekkernijen</a>
        <a [routerLink]="['over-ons']" class="nav-link">Over Ons</a>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <footer class="footer">
          <a [routerLink]="['/']" >
            <img  src="/assets/LogoPB.png" alt="logo" aria-hidden="true" />
        </a>
        <p>All rights reserved - Sarah Janssen</p>
      </footer>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portugese Bakker';
}
