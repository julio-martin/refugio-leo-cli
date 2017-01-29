import { Component } from '@angular/core';

import {DogService} from './dogs/dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
        DogService
    ]
})
export class AppComponent {
 views: Object[] = [
   {
      name: "Portada",
      description: "",
      icon: "pets",
      href: "/"
    },
   {
      name: "Perros en adopción",
      description: "Adopta un amigo",
      icon: "pets",
      href: "dogs"
    },
    {
      name: "Quienes somos",
      description: "El Refugio",
      icon: "pets",
      href: "nosotros"
    },
    {
      name: "Colabora",
      description: "Ayuda a nuestros peluditos",
      icon: "pets",
      href: "colabora"
    },
    {
      name: "Contacto",
      description: "¿Hablamos?",
      icon: "pets",
      href: "contacto"
    }
  ];
  headerLinks: Object[] = [
    {
      name: "Portada",
      href: "/"
    },
   {
      name: "Adopta",
      href: "dogs"
    },
    {
      name: "El Refugio",
      href: "nosotros"
    },
    {
      name: "Colabora",
      href: "colabora"
    },
    {
      name: "Contacto",
      href: "contacto"
    }
  ];
}
