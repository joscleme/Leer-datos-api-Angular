import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Typicode } from './typicode';

@Injectable({
  providedIn: 'root'
})
export class LeerDatosApiService {

  urlDatos = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  leerDatos():Observable<Typicode[]> {
    return this.http.get<Typicode[]>(this.urlDatos);
  }

}
