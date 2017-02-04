import {Component, OnInit, EventEmitter } from '@angular/core';
import {LangChangeEvent, TranslateService, TranslateModule} from 'ng2-translate';

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

    onLangChange: EventEmitter<LangChangeEvent>;

    constructor(private _dogService: DogService, private _translate : TranslateService) {
        
    }

    ngOnInit(): void {
        //monitor language change
        this.onLangChange = this._translate.onLangChange.subscribe( (event: LangChangeEvent) => {
            this._dogService.getDogs(event.lang)
                .subscribe(
                    dogs => this.dogs = dogs,
                    error => this.errorMessage = <any>error
                );
        });
        this._dogService.getDogs(this._translate.currentLang)
                .subscribe(
                    dogs => this.dogs = dogs,
                    error => this.errorMessage = <any>error
                );
    }
}