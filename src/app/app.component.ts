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
      name: "Perros en adopción",
      description: "Adopta un amigo",
      icon: "pets",
      href: "/"
    },
    {
      name: "Quienes somos",
      description: "Un poco de historia",
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
      description: "Rellena el formulario",
      icon: "pets",
      href: "contacto"
    }
  ];
  headerLinks: Object[] = [
   {
      name: "Adopta",
      href: "/"
    },
    {
      name: "La Protectora",
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
