import { Book } from './../models/book';
import { Cd } from '../models/cd';

export class MediaService {
  booksList: Book[] = [
    {
      title: 'Dune',
      description: [
          'Frank Herbert',
          "Dune (titre original : Dune) est un roman de science-fiction de l'écrivain Frank Herbert, publié aux États-Unis en 1965. Il s'agit du premier roman du cycle de Dune."
      ],
      isLend: false
    },
    {
      title: 'Blade Runner',
      description: [
          'Philip K. Dick',
          "Les androïdes rêvent-ils de moutons électriques ? est un roman de science-fiction écrit par Philip K. Dick en 1966 et publié deux ans plus tard aux États-Unis."
      ],
      isLend: true
    },
    {
      title: 'Les Fleurs du mal',
      description: [
          'Charles Baudelaire',
          "Les Fleurs du mal est un recueil de poèmes de Charles Baudelaire, englobant la quasi-totalité de sa production en vers, de 1840 jusqu'à sa mort survenue fin août 1867. Publié le 25 juin 1857, le livre scandalise aussitôt la société conformiste et soucieuse de respectabilité."
      ],
      isLend: false
    }
  ];
  cdsList: Cd[] = [
    {
      title: 'Bloody Kisses',
      description : [
        'Type O Negative',
        "Bloody Kisses est le troisième album du groupe de heavy metal Type O Negative sorti en 1993. Cet album leur vaut un succès commercial international et est le premier album du label Roadrunner à être certifié disque d'or."
      ],
      isLend: true
    },
    {
      title: 'Strife, Struggle & Fire',
      description : [
        'New Canyons',
        'https://newcanyons.bandcamp.com/album/strife-struggle-fire'
      ],
      isLend: true
    },
    {
      title: 'Dinner',
      description: [
        'Blood Orange',
        '7", Single',
        'A 	Dinner',
        'B 	Bad Girls'
        ],
      isLend: false
    }
  ];
}