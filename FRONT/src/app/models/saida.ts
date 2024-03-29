import { Pessoa } from 'src/app/models/pessoa';
import { Carro } from 'src/app/models/carro';
export interface Saida { 
    saidaId? : number;
    pessoaId : number;
    pessoa? : Pessoa;
    carroId : number;
    carro? : Carro;
    dinheiro? : number;
    horaEntrada? : Date;
    horaSaida?: string;
}