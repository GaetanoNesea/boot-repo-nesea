import {Component, Input, OnInit} from '@angular/core';
import {IPokemon, IResults} from 'src/app/models/pokemonapi';
import {Router} from '@angular/router';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item?: IPokemon;
  par?: string;
  /*
   Avrai un form drl prsona
   avrai un fomr del copetenze
   or 
   un solo form con due gruppi all'interno
   nel tuo componente dovrai accedere al service che ti restituisce la conpe per persona
  */

  constructor(
    private readonly router: Router,
    private readonly servicePoke: PokeService
    //nuovo service
  ) {
    // console.log(this.router.getCurrentNavigation()!.extras.state!['pokemon']);
    this.item = this.router.getCurrentNavigation()!.extras.state!['pokemon'];
    this.par = this.router.getCurrentNavigation()!.extras.state!['all'];

  }

  ngOnInit(): void {
    //chiami il service per le compet
  }

  // creare un metodo che chiama il service dove passi nuovi valori
  setPoke(){
    this.servicePoke.lista
    // chiama il service che avremo nel constructor
    /**
     * il service andra a cerchio il poke dalla lista esistente e modificherà i dati
     * 1. dovrai creartu una lista che rimane costante nel service del get poke
     * 2. 
     */
  }
}
