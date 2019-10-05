import { Component, Input } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  posts = [
    {
      title: 'Texte',
      content: 'Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue',
      loveIts: 20,
      date: new Date()
    },
    {
      title: 'Poème',
      content: 'Amour tendresse bonté du coeur Beauté divine beauté suprême Douce pensée d\'une vie meilleure',
      loveIts: 0,
      date: new Date()
    },
    {
      title: 'Le cèpe',
      content: 'Cèpe est un nom vernaculaire ambigu en français, pouvant désigner plusieurs espèces différentes de champignons. Ce sont principalement des Boletus',
      loveIts: -2,
      date: new Date()
    }
  ];

}
