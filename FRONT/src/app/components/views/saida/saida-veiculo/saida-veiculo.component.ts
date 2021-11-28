import { SaidaService } from '../../../../services/saidaservice';
import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { CarroService } from 'src/app/services/carro.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Carro } from 'src/app/models/carro';
import { Pessoa } from 'src/app/models/pessoa';
import { Saida } from 'src/app/models/saida';

@Component({
    selector: 'app-saida-veiculo',
    templateUrl: './saida-veiculo.component.html',
    styleUrls: ['./saida-veiculo.component.css']
})
export class SaidaVeiculoComponent implements OnInit {

    pessoaId!: number;
    carroId!: number;
    carros!: Carro[];
    pessoas!: Pessoa[];
    saidas!: Saida[];
    horaString!: string;
    horaEntrada!: number;
    horaSaida!: number;
    placa!: string;
    cpf!: string;
    horaPagar!: number;
    dinheiro!: number;
    
    

    constructor(private router: Router, private service: SaidaService, private pessoaService: PessoaService, private carroService: CarroService) { }


    ngOnInit(): void {
        this.carroService.list().subscribe(carros => {
            this.carros = carros;
        })

        this.pessoaService.list().subscribe(pessoas => {
            this.pessoas = pessoas;
        })

        this.service.list().subscribe(saida => {
            this.saidas = saida;
        })

    }


    baixarVeiculo(): void {

        let saidas: Saida = {
            pessoaId: this.pessoaId,
            carroId: this.carroId,
        };
        this.service.saida(saidas).subscribe((saida) => {
        });

        this.carros.forEach(carro => {
            if (carro.carroId == this.carroId) {
                console.log("teste");
                if (carro.pessoaId == this.pessoaId) {

                    this.calculo();          
                    
                    this.excluirCarro();
                    
                    alert('Saida de veiculo com sucesso!!!');
                   


                }
                else {
                    alert("Esse carro não pertence a esse dono!!");
                    
                }

            }
        });



      

    }

    public excluirCarro(): void {

        this.carros.forEach(carro => {
            if (carro.carroId == this.carroId) {
                this.horaString = carro.horaEntrada as string;
                this.horaEntrada = Date.parse(this.horaString);

                this.carroService.excluir(carro.placa).subscribe();

            }
        });
        this.pessoas.forEach(pessoa => {
            if (pessoa.pessoaId == this.pessoaId) {
                this.pessoaService.excluir(pessoa.cpf).subscribe();
            }
        });
        this.horaEntrada = Date.parse("2021-11-27T20:20:00.0000000-03:00");

        this.horaString = new Date().toString();
        this.horaSaida = Date.parse(this.horaString);
        this.horaSaida = Date.parse("2021-11-27T20:21:00.0000000-03:00");

    }

    public calculo(): void {

        this.horaPagar = this.horaSaida - this.horaEntrada;
        //Entre 1 e 2 horas
        if (this.horaPagar > 5* 60000) {
            this.dinheiro = 50;
        }
        else if (this.horaPagar > 4 * 60000) {
            this.dinheiro = 40;
        }
        //Entre 2 e 4 horas
        else if (this.horaPagar > 3 * 60000) {
            this.dinheiro = 30;
        }
        //Mais de 4 horas
        else if (this.horaPagar > 2 * 60000) {
            this.dinheiro = 30;
        }
        //Menos de 1 horas
        else {
            this.dinheiro = 30;
        }

    }
    


}


