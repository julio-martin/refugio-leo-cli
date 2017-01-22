import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IDog } from './dog';


@Injectable()
export class DogService {

    private _dogUrl = './api/dogs/dogs.json';

    constructor(private _http: Http) {}

    getDogs() : Observable<IDog[]> {
        return this._http.get(this._dogUrl)
            .map((response: Response) => <IDog[]> response.json())
           .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}