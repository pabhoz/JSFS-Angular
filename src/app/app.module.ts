import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoComponent } from './grupo/grupo.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';
import { GruposService, WeatherService } from './services/provider';

//Módulo de cliente para usar httl
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GrupoComponent,
    EncuentrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GruposService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
