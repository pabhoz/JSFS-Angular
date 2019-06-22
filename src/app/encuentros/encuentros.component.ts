import { Component, OnInit } from '@angular/core';
import { GruposService } from '../services/provider';

@Component({
  selector: 'app-encuentros',
  templateUrl: './encuentros.component.html',
  styleUrls: ['./encuentros.component.sass']
})
export class EncuentrosComponent implements OnInit {
  equipos: any = [];

  constructor(private gruposService: GruposService) { 
    this.equipos = this.gruposService.getAllTeams();    
  }

  ngOnInit() {
  }

  updateScore(e,name){
    this.gruposService.updateScore(name,e.target.value);
  }

}
