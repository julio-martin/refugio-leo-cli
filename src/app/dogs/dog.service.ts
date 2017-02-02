import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IDog } from './dog';
import {TranslateService, LangChangeEvent} from 'ng2-translate';

@Injectable()
export class DogService {

    translate: TranslateService;

    private _dogUrl = './api/dogs/dogs.json';

    private _dogENUrl = './api/dogs/dogs_en.json';

    private _dogESUrl = './api/dogs/dogs_es.json';

    constructor(private _http: Http, _translate : TranslateService) {
        //TODO Retrieve dogs information according to current language
        /*this.translate = _translate;
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            console.log(event.lang ==='es' ? this._dogESUrl : this._dogENUrl);
            this._dogUrl = event.lang ==='es' ? this._dogESUrl : this._dogENUrl;
            this.getDogs();
        });*/
    }


    getDogs() : Observable<IDog[]> {
        return this._http.get(this._dogUrl)
            .map((response: Response) => <IDog[]> response.json())
            .catch(this.handleError);
    }

    getDog(name: string): Observable<IDog> {
        return this.getDogs()
            .map((dogs: IDog[]) => dogs.find(d => d.name === name));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}