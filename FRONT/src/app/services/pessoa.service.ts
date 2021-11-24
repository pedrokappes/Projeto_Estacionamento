import { Pessoa } from 'src/app/models/pessoa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class PessoaService{
  
    private baseURL = "http://localhost:5000/api/pessoa";

    constructor(private http: HttpClient) {}

    list(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`${this.baseURL}/listapessoas`)
    }

    create(pessoa : Pessoa): Observable<Pessoa> {
        return this.http.post<Pessoa>(`${this.baseURL}/novapessoa`, pessoa);
    }
    atualizar(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.put<Pessoa>(`${this.baseURL}/atualizarpessoa`, pessoa);
    }

    excluir(cpf: string): Observable<Pessoa> {
        return this.http.delete<Pessoa>(`${this.baseURL}/removerpessoacpf/${cpf}`);
    }

    buscar(cpf: string): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${this.baseURL}/buscarcpf/${cpf}`);
    }

}