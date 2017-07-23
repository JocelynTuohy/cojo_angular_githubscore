import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FetchUserService {

  constructor(private _http: Http) { }
  findUser(username: string){
    console.log(username);
    return this._http.get(`http://api.github.com/users/${username}`).map(data=>data.json()).toPromise();
  }
}
