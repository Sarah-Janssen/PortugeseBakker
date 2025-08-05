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
          placeholder="Zoeken"
        />
        <!-- Categorie filter -->
        <select class="filter" [(ngModel)]="selectedCategory"  name="category">
          <option value="">Alle categorieën</option>
            @for (cat of categories; track cat) {
              <option [value]="cat"> {{ cat }}</option>
            }
        </select>

        <!-- Prijs filter -->
        <select class="filter" [(ngModel)]="selectedPrice" name="price">
          <option value="">Alle prijzen</option>
          <option value="low">€0 - €2</option>
          <option value="mid">€2 - €5</option>
          <option value="high">€5+</option>
        </select>

<!--Sort on price-->
        <select [(ngModel)]="sortOrder" name="sortOrder" class ="filter">
          <option value="">Standaardvolgorde</option>
          <option value="asc">Prijs: Laag → Hoog</option>
          <option value="desc">Prijs: Hoog → Laag</option>
        </select>

        <!-- Reset-knop -->
        <button (click)="clearSearch()">Reset filters</button>
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
  selectedCategory = ''
  selectedPrice = ''
  categories = ['zoet', 'hartig', 'seizoensgebonden']
  sortOrder = ''

  private sweetPastelService = inject(SweetpastelService);

  constructor() {
    this.sweetPastelsList = this.sweetPastelService.getAllSweetPastels();
  }

  clearSearch() {
    this.searchTerm = ''
    this.selectedCategory = ''
    this.selectedPrice = ''
  }

  //Search
  get filteredPastels(): SweetpastelsInfo[] {
    const term = this.searchTerm.toLowerCase();

    let result = this.sweetPastelsList.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
      const matchCategory = this.selectedCategory ? p.category === this.selectedCategory : true;
      const matchPrice = this.matchPriceFilter(p.price);

      return matchSearch && matchCategory && matchPrice;
    });

    if (this.sortOrder === 'asc') {
      result = result.sort((a,b) => a.price - b.price);
    }
    else if (this.sortOrder === 'desc') {
      result = result.sort((a,b) => b.price - a.price);
    }
    return result;


  }

  matchPriceFilter(price: number): boolean {
    switch (this.selectedPrice) {
      case 'low':
        return price <= 2;
      case 'mid':
        return price > 2 && price <= 5;
      case 'high':
        return price > 5;
      default:
        return true;
    }
  }


}
