import { Component, Input } from '@angular/core';
import { IResults } from 'src/app/models/pokemonapi';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
@Input() item!:IResults
}
