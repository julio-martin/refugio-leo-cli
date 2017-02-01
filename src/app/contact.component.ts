import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent  implements OnInit, OnDestroy{
    dog : string;

    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router:Router) {
    }

    ngOnInit() : void {
        this.sub = this._route.params.subscribe(
            params => {
                let dog = params['dog'];
                console.log("DOG:" + dog);
                if(dog) {
                this.dog = dog;
                console.log("CONTACT WITH " + dog);
                } else {
                    console.log("CONTACT WITHOUT DOG");
                }
        });
    }


    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}