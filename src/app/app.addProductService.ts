import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now

    @Injectable()
    export class MyHttpService {
    constructor(private _http:Http) {}

    getProductObservable(url:string) {
    return this._http.post(url, {"name":"Effective Java"})
        .map(data => {
            //data.json();
            console.log("I CAN SEE DATA HERE: ", data);
            return data;
    });
}
}