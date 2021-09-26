import { Injectable } from '@angular/core';
import { Carro } from './../models/carro';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarroService {

    private baseURL = "http://localhost:5000/api/carro";

    constructor(private http: HttpClient) {}

    list(): Observable<Carro[]> {
        return this.http.get<Carro[]>(`${this.baseURL}/relacaodecarros`);
    }
}
