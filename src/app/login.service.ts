import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  //Properties
  Url: string;
  header: any;

  // Constructor define
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:59088/Api/'
  }

  // LoginMethod
  Login(model: any) {
    debugger;
    var url = this.Url + 'Login/UserLogin';
    // httpHeader
    const httpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    //webapi Method calling
    return this.http.post(url, model, { 'headers': httpHeaders });
  }

}