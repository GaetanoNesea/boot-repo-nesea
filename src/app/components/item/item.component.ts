import {Component, Input, OnInit} from '@angular/core';
import {IPokemon, IResults} from 'src/app/models/pokemonapi';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item?: IPokemon;
  par?: string;

  constructor(
    private readonly router: Router
  ) {
    // console.log(this.router.getCurrentNavigation()!.extras.state!['pokemon']);
    this.item = this.router.getCurrentNavigation()!.extras.state!['pokemon'];
    this.par = this.router.getCurrentNavigation()!.extras.state!['all'];

  }

  ngOnInit(): void {
  }
}
