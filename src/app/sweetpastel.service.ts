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
    },
    {
      id: 2,
      name: 'Pastel de Feijão',
      photo: './assets/images/sweetPastel/PasteldeFeijão.jpg',
      description: 'Gemaakt met witte bonen en amandel!',
      price: 2.5,
    },
    {
      id: 3,
      name: 'Travesseiro de Sintra',
      photo: './assets/images/sweetPastel/TravesseirodeSintra.jpg',
      description: 'Luchtig gebakje met amandel en eidooierroom.',
      price: 3.2,
    },
    {
      id: 4,
      name: 'Queijada de Sintra',
      photo: './assets/images/sweetPastel/QueijadadeSintra.jpg',
      description: 'Klein kaastaartje met kaneel.',
      price: 2.2,
    },
    {
      id: 5,
      name: 'Pão de Ló',
      photo: './assets/images/sweetPastel/PãodeLó.jpg',
      description: 'Luchtige spongecake, zacht vanbinnen.',
      price: 3.5,
    },
    {
      id: 6,
      name: 'Bola de Berlim',
      photo: './assets/images/sweetPastel/BoladeBerlim.jpg',
      description: 'Gevulde donut met banketbakkersroom.',
      price: 2,
    },
    {
      id: 7,
      name: 'Pastel de Tentúgal',
      photo: './assets/images/sweetPastel/PasteldeTentúgal.jpg',
      description: 'Knapperig deeg met zoete eivulling.',
      price: 2.8,
    },
    {
      id: 8,
      name: 'Jesuíta',
      photo: './assets/images/sweetPastel/Jesuíta.jpg',
      description: 'Bladerdeeg met glazuur en amandel.',
      price: 2.6,
    },
    {
      id: 9,
      name: 'Toucinho do Céu',
      photo: './assets/images/sweetPastel/ToucinhodoCéu.jpg',
      description: 'Rijke cake met amandel en eidooier.',
      price: 3.2,
    },
    {
      id: 10,
      name: 'Pampilho',
      photo: './assets/images/sweetPastel/Pampilho.jpg',
      description: 'Langwerpig gebakje met kaneelvulling.',
      price: 2.4,
    },
    {
      id: 11,
      name: 'Brisa do Lis',
      photo: './assets/images/sweetPastel/BrisadoLis.jpg',
      description: 'Specialiteit uit Leiria met eidooiers.',
      price: 2.7,
    },
    {
      id: 12,
      name: 'Folar da Páscoa',
      photo: './assets/images/sweetPastel/FolardaPáscoa.jpg',
      description: 'Traditioneel paasbrood met ei.',
      price: 3.1,
    },
    {
      id: 13,
      name: 'Dom Rodrigo',
      photo: './assets/images/sweetPastel/DomRodrigo.png',
      description: 'Zilverpapiertje met amandel en eiergaren.',
      price: 2.9,
    },
    {
      id: 14,
      name: 'Cavacas',
      photo: './assets/images/sweetPastel/Cavacas.png',
      description: 'Luchtige cakejes met suikerlaagje.',
      price: 2.3,
    },
    {
      id: 15,
      name: 'Areias',
      photo: './assets/images/sweetPastel/Areias.png',
      description: 'Zandkoekjes met suiker of kaneel.',
      price: 1.8,
    },
  ];

  getAllSweetPastels(): SweetpastelsInfo[] {
    return this.sweetPastelsList;
  }
  getSweetPastelById(id: number): SweetpastelsInfo | undefined {
    return this.sweetPastelsList.find((sweetPastel) => sweetPastel.id === id);
  }
}
