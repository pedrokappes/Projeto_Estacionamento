import { Pessoa } from './pessoa';
export interface Carro {
    
    carroId? : number;
    modelo: string;
    placa: string;
    cor: string;
    pessoaId: number;
    pessoa?: Pessoa;


}
