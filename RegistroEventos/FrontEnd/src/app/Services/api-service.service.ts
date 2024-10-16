import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRequestRegistroEvento } from '../Models/RequestIRegistroEvento.Interface';
import { IResponseRegistroEvento } from '../Models/ResponseIRegistroEvento.Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  urlEndpoint: string = 'http://localhost:5200';
  constructor(private http: HttpClient) { }

  registroEvento(Datos: IRequestRegistroEvento):Observable<IResponseRegistroEvento> {
    let url1 = `${this.urlEndpoint}/registerEvento`;
    return this.http.post<IResponseRegistroEvento>(url1, Datos);
  }

  obtenerEventos(): Observable<any[]> {
    let url2 = `${this.urlEndpoint}/eventos`;
    return this.http.get<any[]>(url2);
  }
}
