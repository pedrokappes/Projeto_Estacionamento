import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Vaga } from '../models/vaga';



@Injectable({
    providedIn: 'root'
})
export class VagaService{
  
    private baseURL = "http://localhost:5000/api/vaga";

    constructor(private http: HttpClient) {}

    list(): Observable<Vaga[]> {
        return this.http.get<Vaga[]>(`${this.baseURL}/relacaodevagas`)
    }

}