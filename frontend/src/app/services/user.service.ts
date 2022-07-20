import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  url_user = 'http://localhost:3000/user';

// #####################################################################################################################
// ####                            Handling GET Requests                                                           ####
// #####################################################################################################################

  // getMusician(name:any):Observable<any> {
  //   return this._http.get(`${this.url_musician}/${name}`);
  // }

}
