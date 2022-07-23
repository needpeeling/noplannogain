import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UID!: number;
  URL_USER = 'http://localhost:3000/user';

  constructor(private _http:HttpClient) { }

  // #####################################################################################################################
  // ####                            Handling GET Requests                                                           ####
  // #####################################################################################################################

  checkUser(name:string):Observable<any> {
    return this._http.get(`${this.URL_USER}/${name}`);
  }

  // #####################################################################################################################
  // ####                            Handling POST Requests                                                           ####
  // #####################################################################################################################

  signUp(data:any):Observable<any> {
    console.log(data);
    return this._http.post(this.URL_USER, data);
  }

}
