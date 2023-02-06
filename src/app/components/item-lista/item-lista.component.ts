import {Component, Input} from '@angular/core';
import {IResults} from '../../models/pokemonapi';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.scss']
})
export class ItemListaComponent {

  @Input() poke!:IResults;



}
