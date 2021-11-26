import { Carro } from 'src/app/models/carro';
export interface Vaga { 
    vagaId? : number;
    status : String;
    carroId : number;
    carro? : Carro;
}