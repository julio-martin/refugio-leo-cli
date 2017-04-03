import {Component, OnInit, EventEmitter } from '@angular/core';
import {LangChangeEvent, TranslateService, TranslateModule} from 'ng2-translate';

import { IDog } from './dog';
import {DogService} from './dog.service';

export function shuffle(dogs: IDog[]) : IDog[] {
    if (dogs==null) {
            return null;
        }
        var m = dogs.length, t, i;
            while(m) {
            i = Math.floor(Math.random() * m--);
            t = dogs[m];
            dogs[m] = dogs[i];
            dogs[i] = t;
        };
        return dogs;
}

@Component({
    selector: 'dog-list',
    templateUrl: './dog-list.component.html',
    styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
    dogs: IDog[];
    dogsAdopted: IDog[];
    errorMessage : string;

    onLangChange: EventEmitter<LangChangeEvent>;

    constructor(private _dogService: DogService, private _translate : TranslateService) {
        
    }

    ngOnInit(): void {
        //monitor language change
        this.onLangChange = this._translate.onLangChange.subscribe( (event: LangChangeEvent) => {
            this._dogService.getDogs(event.lang)
                .subscribe(
                    dogs => this.dogs = shuffle(dogs),
                    error => this.errorMessage = <any>error
                );
        });
        this._dogService.getDogs(this._translate.currentLang)
                .subscribe(
                    dogs => this.dogs = shuffle(dogs),
                    error => this.errorMessage = <any>error
                );
        this.onLangChange = this._translate.onLangChange.subscribe( (event: LangChangeEvent) => {
            this._dogService.getAdoptedDogs(event.lang)
                .subscribe(
                    dogs => this.dogsAdopted = dogs,
                    error => this.errorMessage = <any>error
                );
        });
        this._dogService.getAdoptedDogs(this._translate.currentLang)
                .subscribe(
                    dogs => this.dogsAdopted = dogs,
                    error => this.errorMessage = <any>error
                );
    }
}