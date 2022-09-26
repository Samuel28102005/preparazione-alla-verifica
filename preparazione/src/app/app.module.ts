import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreparazioneComponent } from './preparazione/preparazione.component';
import { PreparazioneVerificaComponent } from './preparazione-verifica/preparazione-verifica.component';
import { PreparazioneVerifica1Component } from './preparazione-verifica1/preparazione-verifica1.component';

@NgModule({
  declarations: [
    AppComponent,
    PreparazioneComponent,
    PreparazioneVerificaComponent,
    PreparazioneVerifica1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
