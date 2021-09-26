import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Pessoa } from '../models/pessoa';



@Injectable({
    providedIn: 'root'
})
export class PessoaService{
  
    private baseURL = "http://localhost:5000/api/pessoa";

    constructor(private http: HttpClient) {}

    list(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`${this.baseURL}/relacaodepessoas`)
    }

}