import {Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IDog } from './dog';
import {DogService} from './dog.service';
import {TranslateService} from '@ngx-translate/core';
import { Data } from "../data";

@Component({
    selector: 'dog-detail',
    templateUrl: './dog-detail.component.html',
    styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit, OnDestroy {
    dog: IDog;
    pageTitle: string = '';
    errorMessage: string;
    private sub: Subscription;
    
    constructor(private _data: Data, private _route: ActivatedRoute,
                private _router:Router,
                private  _dogService: DogService, private _translate : TranslateService) {
    }

    ngOnInit() : void {
        this.sub = this._route.params.subscribe(
            params => {
                let name = params['name'];
                this.pageTitle += `${name}`;
                this.getDog(name);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getDog(name: string) {
        this._dogService.getDog(name, this._translate.currentLang).subscribe(
            dog => {this.dog = dog},
            error => this.errorMessage = <any>error);
    }

    onBack() : void {
        this._router.navigate(['/dogs']);
    }

    public contactFormByDog() {
        this._data.storage = this.dog.name;
        this._router.navigate(['contacto']);
    }
}