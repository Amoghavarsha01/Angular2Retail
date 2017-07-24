import {Injectable, EventEmitter} from '@angular/core';

/*@Injectable()
export class AddProductService {
    // Event store
    private static _emitters: { [ID: string]: EventEmitter<any> } = {};
    // Set a new event in the store with a given ID
    // as key
    static get(ID: string): EventEmitter<any> {
        if (!this._emitters[ID]) 
            this._emitters[ID] = new EventEmitter();
        return this._emitters[ID];
    }


}*/

import { Http, Response , Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from './app.Product'

@Injectable()
export class UserService {
    
  constructor (
    private http: Http
  ) {}

  addProduct() {
     var headers1 = new Headers();
     headers1.append('Access-Control-Allow-Origin','*');
     let options = new RequestOptions({ headers: headers1 });
     console.log(options);
    return this.http.get(`http://localhost:8093/addProduct/app/productAdd` )
    .map((res:Response) => <Product[]>res.json());
    
  }
}