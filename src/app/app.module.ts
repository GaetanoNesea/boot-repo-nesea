import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListaComponent } from './components/lista/lista.component';
import { ItemListaComponent } from './components/item-lista/item-lista.component';
import { ItemComponent } from './components/item/item.component';
import { RouterModule } from '@angular/router';
import { ListaPersoneComponent } from './components/lista-persone/lista-persone.component';
import { ModificaPersonaComponent } from './components/modifica-persona/modifica-persona.component';
import { CreaPersonaComponent } from './components/crea-persona/crea-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ItemListaComponent,
    ItemComponent,
    ListaPersoneComponent,
    ModificaPersonaComponent,
    CreaPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
