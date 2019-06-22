import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  endpoint:string = "https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units=metric";
  headers = new HttpHeaders();
  _weather: Subject<number> = new Subject();

  constructor(private http: HttpClient) { 
    this.headers = this.headers.set('X-RapidAPI-Host', `community-open-weather-map.p.rapidapi.com`);
    this.headers = this.headers.set('X-RapidAPI-Key', `GaYYNYwa8Mmshy6Kcq6usXTbjmjPp1JEfQujsn4Jy01PI4C442`);

    setTimeout(() => {
      this.weather.next(450);
    },10000)
  }

  get weather() : Subject<any> {
    return this._weather;
  }
  set weather(src: Subject<any>) {
    this._weather = src;
  }

  getTemperature(zone){
    this.http.get(`${this.endpoint}&q=${zone}`,{ headers: this.headers}).subscribe( (data: any) => {
      this.weather.next(data.main.temp);
    });
  }
}
