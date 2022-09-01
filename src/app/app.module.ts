import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JuegoComponent } from './juego/juego.component';
import { DadoComponent } from './juego/dado/dado.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    DadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
