import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IScreeing } from '../interfaces/index';
@Injectable()
export class ScreeningService {
    private _Url = 'api/data/screenings.json';
    constructor(private _http: Http) { }
    GetScreenings(): Observable<IScreeing> {
        return this._http.get(this._Url)
            .map((response: Response) => <IScreeing>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}