import {Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IDog } from './dog';
import {DogService} from './dog.service';

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

    constructor(private _route: ActivatedRoute,
                private _router:Router,
                private  _dogService: DogService) {
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
        this._dogService.getDog(name).subscribe(
            dog => {this.dog = dog},
            error => this.errorMessage = <any>error);
    }

    onBack() : void {
        this._router.navigate(['/dogs']);
    }
}