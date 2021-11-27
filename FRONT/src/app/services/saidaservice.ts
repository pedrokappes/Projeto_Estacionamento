import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Vaga } from '../models/vaga';
import { Saida } from '../models/saida';


@Injectable({
    providedIn: 'root'
})
export class SaidaService{
  
    private baseURL = "http://localhost:5000/api/saida";

    constructor(private http: HttpClient) {}

    list(): Observable<Saida[]> {
        return this.http.get<Saida[]>(`${this.baseURL}/listasaida`)
    }

    saida(saida : Saida): Observable<Vaga> {
        return this.http.post<Vaga>(`${this.baseURL}/saida`, saida);
    }


}