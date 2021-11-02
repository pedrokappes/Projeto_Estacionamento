import { Pessoa } from 'src/app/models/pessoa';
export interface Carro {
    
    carroId? : number;
    modelo: string;
    placa: string;
    cor: string;
    pessoa?: Pessoa;
    pessoaId?: number;


}
