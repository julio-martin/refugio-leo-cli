import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IDog } from './dog';
import {TranslateService, LangChangeEvent} from 'ng2-translate';

@Injectable()
export class DogService {

    private _dogUrl = '';

    private _dogENUrl = './api/dogs/dogs_en.json';

    private _dogESUrl = './api/dogs/dogs_es.json';

    private _dogAdoptedUrl = '';

    private _dogAdoptedENUrl = './api/dogs/dogs_adopted_en.json';

    private _dogAdoptedESUrl = './api/dogs/dogs_adopted_es.json';

    constructor(private _http: Http) {
        
    }

    getDogs(language : string) : Observable<IDog[]> {
        this._dogUrl = (language === 'es' ? this._dogESUrl : this._dogENUrl);
        return this._http.get(this._dogUrl)
            .map((response: Response) => <IDog[]> response.json())
            .catch(this.handleError);
    }

    getAdoptedDogs(language : string) : Observable<IDog[]> {
        this._dogAdoptedUrl = (language === 'es' ? this._dogAdoptedESUrl : this._dogAdoptedENUrl);
        return this._http.get(this._dogAdoptedUrl)
            .map((response: Response) => <IDog[]> response.json())
            .catch(this.handleError);
    }

    getDog(name: string, language: string): Observable<IDog> {
        return this.getDogs(language)
            .map((dogs: IDog[]) => dogs.find(d => d.name === name));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}