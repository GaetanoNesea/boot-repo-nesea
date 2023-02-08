import { Component, Input, OnInit } from '@angular/core';
import { IResults } from 'src/app/models/pokemonapi';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() item!:IResults;

constructor(){}
  ngOnInit(): void {
  }
}
