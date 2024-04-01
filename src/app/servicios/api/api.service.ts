import { Injectable } from '@angular/core';
import {RegisterAuth} from '../../Auth/Register.Auth'
import {RegisterRequest} from '../../Request/Register.Request'
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // url : string ="https://localhost:7141/";

  // constructor(private http : HttpClient) { }

  // RegisterByEmail(form : RegisterRequest) : Observable<RegisterAuth>{
  //   let direccion = this.url + "api/Register/Register";
  //   return this.http.post<RegisterAuth>(direccion,form)
    
  // }
}
