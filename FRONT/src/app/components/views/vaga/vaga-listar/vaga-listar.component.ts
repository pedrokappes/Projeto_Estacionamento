import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vaga-listar',
  templateUrl: './vaga-listar.component.html',
  styleUrls: ['./vaga-listar.component.css']
})
export class VagaListarComponent implements OnInit {

    listavagas: Vaga[] = [];
    constructor(private service: VagaService) {}

    ngOnInit(): void {
        this.service.list().subscribe(listavagas => {
            this.listavagas = listavagas;
            for(let vaga of listavagas){
                console.log(vaga);
            }
        });
    }
}
