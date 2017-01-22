import {Component, OnInit } from '@angular/core';

import { IDog } from './dog';
import {DogService} from './dog.service';

@Component({
    selector: 'dog-list',
    templateUrl: './dog-list.component.html',
    styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
    dogs: IDog[];
    errorMessage : string;

    constructor(private _dogService: DogService) {
        
    }

    ngOnInit(): void {
        this._dogService.getDogs()
                .subscribe(
                    dogs => this.dogs = dogs,
                    error => this.errorMessage = <any>error
                );
    }
}