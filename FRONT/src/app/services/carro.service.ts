import { Injectable } from '@angular/core';
import { Carro } from '../models/carro';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable({
    providedIn: 'root'
})
export class CarroService {

    private baseURL = "http://localhost:5000/api/carro";

    constructor(private http: HttpClient) {}

    list(): Observable<Carro[]> {
        return this.http.get<Carro[]>(`${this.baseURL}/relacaodecarros`);
    }

    create(carro: Carro): Observable<Carro> {
        return this.http.post<Carro>(`${this.baseURL}/entradadecarro`, carro);
    }

    atualizar(carro: Carro): Observable<Carro> {
        return this.http.put<Carro>(`${this.baseURL}/atualizarporcarroid`, carro);
    }

    buscar(placa: string): Observable<Carro> {
        return this.http.get<Carro>(`${this.baseURL}/bucasrporplaca/${placa}`);
    }
    excluir(placa: string): Observable<Carro> {
        return this.http.delete<Carro>(`${this.baseURL}/removerporcarroplaca/${placa}`);
    }
    buscarID(pessoaID: number): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${this.baseURL}/buscarporpessoaid/${pessoaID}`);
    }

}
