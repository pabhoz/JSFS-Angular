import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit {

  @Input() equipos: any = [];

  constructor() {
    console.log(this.equipos);
   }

  ngOnInit() {
    console.log(this.equipos);
  }

}
