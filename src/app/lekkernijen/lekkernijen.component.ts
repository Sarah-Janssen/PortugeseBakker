import { Component, inject } from '@angular/core';
import { SweetpastelService } from '../sweetpastel.service';
import { SweetpastelsInfo } from '../sweetpastels';
import { PastelsComponent } from '../pastels/pastels.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lekkernijen',
  standalone: true,
  imports: [PastelsComponent, FormsModule],
  template: `
    <section>
      <form>
        <input
          type="text"
          [(ngModel)]="searchTerm"
          name="zoekveld"
          placeholder="Zoek je favoriete gebak!"
        />
        <a class="button" (click)="clearSearch()">Wissen</a>

      </form>

    </section>

    <section>
      <h2 class="listing-heading">Lekkernijen</h2>
    </section>

    <section class="results">
      @for (pastelsInfo of filteredPastels; track pastelsInfo.id) {
        <app-pastels [pastelsInfo]="pastelsInfo"></app-pastels>
      }
    </section>
  `,
  styleUrl: './lekkernijen.component.css'
})
export class LekkernijenComponent {
  sweetPastelsList: SweetpastelsInfo[] = [];
  searchTerm: string = '';

  private sweetPastelService = inject(SweetpastelService);

  constructor() {
    this.sweetPastelsList = this.sweetPastelService.getAllSweetPastels();
  }

  clearSearch() {
    this.searchTerm = ''
  }

  get filteredPastels(): SweetpastelsInfo[] {
    const term = this.searchTerm.toLowerCase();
    return this.sweetPastelsList.filter(p =>
      p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)
    );
  }
}
