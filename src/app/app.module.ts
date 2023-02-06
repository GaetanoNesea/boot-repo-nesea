import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListaComponent } from './components/lista/lista.component';
import { ItemListaComponent } from './components/item-lista/item-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ItemListaComponent
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
