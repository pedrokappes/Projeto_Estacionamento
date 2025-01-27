import { Component, OnInit } from '@angular/core';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private vagaService: VagaService) { }

  ngOnInit(): void {
    this.vagaService.inicial();
  }
 
}
