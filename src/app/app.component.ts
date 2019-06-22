import { Component } from '@angular/core';
import { GruposService, WeatherService } from './services/provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  grupos: any = [];
  weather: any;

  constructor(private gruposService: GruposService, private weatherService: WeatherService){
    this.grupos = this.gruposService.grupos;
    this.weatherService.getTemperature("cali,co");
    this.weatherService.weather.subscribe((temp) => {
      this.weather = temp;
    });

  }
  
}
