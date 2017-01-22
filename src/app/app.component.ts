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
      name: "Quienes somos",
      description: "Un poco de historia",
      icon: "pets"
    },
    {
      name: "Colabora",
      description: "Ayuda a nuestros peluditos",
      icon: "pets"
    },
    {
      name: "Contacto",
      description: "Rellena el formulario",
      icon: "pets"
    }
  ];
}
