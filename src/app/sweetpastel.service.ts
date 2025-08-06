//Sweetpastels.service.ts

import { Injectable } from '@angular/core';
import {SweetpastelsInfo} from './sweetpastels'

@Injectable({
  providedIn: 'root'
})
export class SweetpastelService {
  sweetPastelsList: SweetpastelsInfo[] = [
    {
      id: 1,
      name: 'Pastel de Nata',
      photo: './assets/images/sweetPastel/pasteldenata.jpg',
      description: 'De lekkerste ter wereld!',
      price: 3,
      category: 'zoet'
    },
    {
      id: 2,
      name: 'Pastel de Feijão',
      photo: './assets/images/sweetPastel/PasteldeFeijão.jpg',
      description: 'Gemaakt met witte bonen en amandel!',
      price: 2.5,
      category: 'hartig'
    },
    {
      id: 3,
      name: 'Travesseiro de Sintra',
      photo: './assets/images/sweetPastel/TravesseirodeSintra.jpg',
      description: 'Luchtig gebakje met amandel en eidooierroom.',
      price: 3.2,
      category: 'zoet'
    },
    {
      id: 4,
      name: 'Queijada de Sintra',
      photo: './assets/images/sweetPastel/QueijadadeSintra.jpg',
      description: 'Klein kaastaartje met kaneel.',
      price: 2.2,
      category: 'zoet'
    },
    {
      id: 5,
      name: 'Pão de Ló',
      photo: './assets/images/sweetPastel/PãodeLó.jpg',
      description: 'Luchtige spongecake, zacht vanbinnen.',
      price: 3.5,
      category: 'zoet'
    },
    {
      id: 6,
      name: 'Bola de Berlim',
      photo: './assets/images/sweetPastel/BoladeBerlim.jpg',
      description: 'Gevulde donut met banketbakkersroom.',
      price: 2,
      category: 'hartig'
    },
    {
      id: 7,
      name: 'Pastel de Tentúgal',
      photo: './assets/images/sweetPastel/PasteldeTentúgal.jpg',
      description: 'Knapperig deeg met zoete eivulling.',
      price: 2.8,
      category: 'zoet'
    },
    {
      id: 8,
      name: 'Jesuíta',
      photo: './assets/images/sweetPastel/Jesuíta.jpg',
      description: 'Bladerdeeg met glazuur en amandel.',
      price: 2.6,
      category: 'zoet'
    },
    {
      id: 9,
      name: 'Toucinho do Céu',
      photo: './assets/images/sweetPastel/ToucinhodoCéu.jpg',
      description: 'Rijke cake met amandel en eidooier.',
      price: 3.2,
      category: 'zoet'
    },
    {
      id: 10,
      name: 'Pampilho',
      photo: './assets/images/sweetPastel/Pampilho.jpg',
      description: 'Langwerpig gebakje met kaneelvulling.',
      price: 2.4,
      category: 'zoet'
    },
    {
      id: 11,
      name: 'Brisa do Lis',
      photo: './assets/images/sweetPastel/BrisadoLis.jpg',
      description: 'Specialiteit uit Leiria met eidooiers.',
      price: 2.7,
      category: 'zoet'
    },
    {
      id: 12,
      name: 'Folar da Páscoa',
      photo: './assets/images/sweetPastel/FolardaPáscoa.jpg',
      description: 'Traditioneel paasbrood met ei.',
      price: 3.1,
      category: 'seizoensgebonden'
    },
    {
      id: 13,
      name: 'Dom Rodrigo',
      photo: './assets/images/sweetPastel/DomRodrigo.jpg',
      description: 'Zilverpapiertje met amandel en eiergaren.',
      price: 2.9,
      category: 'hartig'
    },
    {
      id: 14,
      name: 'Cavacas',
      photo: './assets/images/sweetPastel/Cavacas.jpg',
      description: 'Luchtige cakejes met suikerlaagje.',
      price: 2.3,
      category: 'zoet'
    },
    {
      id: 15,
      name: 'Areias',
      photo: './assets/images/sweetPastel/Areias.jpg',
      description: 'Zandkoekjes met suiker of kaneel.',
      price: 1.8,
      category: 'zoet'
    },
  ];

  getAllSweetPastels(): SweetpastelsInfo[] {
    return this.sweetPastelsList;
  }
  getSweetPastelById(id: number): SweetpastelsInfo | undefined {
    return this.sweetPastelsList.find((sweetPastel) => sweetPastel.id === id);
  }
}
