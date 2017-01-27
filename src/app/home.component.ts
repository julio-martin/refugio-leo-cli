import { Component } from '@angular/core';

import {DogService} from './dogs/dog.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[
        DogService
    ]
})
export class HomeComponent {
}