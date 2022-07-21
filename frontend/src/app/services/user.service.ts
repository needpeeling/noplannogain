import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  URL_USER = 'http://localhost:3000/user';

// #####################################################################################################################
// ####                            Handling POST Requests                                                           ####
// #####################################################################################################################

  signUp(data:any):Observable<any> {
    console.log(data);
    return this._http.post(this.URL_USER, data);
  }

}
