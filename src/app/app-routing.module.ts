import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreaPersonaComponent} from './components/crea-persona/crea-persona.component';
import {ItemComponent} from './components/item/item.component';
import {ListaPersoneComponent} from './components/lista-persone/lista-persone.component';
import {ListaComponent} from './components/lista/lista.component';
import {ModificaPersonaComponent} from './components/modifica-persona/modifica-persona.component';

const routes: Routes = [
  {path: 'lista', component: ListaComponent},
  {path: 'item', component: ItemComponent},
  {path: '**', redirectTo: 'lista', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
