import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  grupos: any = [
    [
      {nombre: "Brazil", puntos: 0},
      {nombre: "Peru", puntos: 0},
      {nombre: "Venezuela", puntos: 0},
      {nombre: "Bolivia", puntos: 0}
    ],
    [
      {nombre: "Paraguay", puntos: 0},
      {nombre: "Colombia", puntos: 0},
      {nombre: "Argentina", puntos: 0},
      {nombre: "Qatar", puntos: 0}
    ],
    [
      {nombre: "Chile", puntos: 0},
      {nombre: "Uruguay", puntos: 0},
      {nombre: "Japan", puntos: 0},
      {nombre: "Ecuador", puntos: 0}
    ],
  ];

  constructor() { }

  updateScore(teamName,score){
    let equipos: any = []; 
    for (let i = 0; i < this.grupos.length; i++) {
      for (let j = 0; j < this.grupos[i].length; j++) {
        if(teamName == this.grupos[i][j].nombre){
          this.grupos[i][j].puntos = score;
        }
      }
    }
    console.log(this.grupos);
  }

  getAllTeams(){
    let equipos: any = []; 
    for (let i = 0; i < this.grupos.length; i++) {
      for (let j = 0; j < this.grupos[i].length; j++) {
        const element = this.grupos[i][j];
        equipos.push(element);
      }
    }
    return equipos;
  }
}
