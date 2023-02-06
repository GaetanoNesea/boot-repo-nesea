import {Component, OnInit} from '@angular/core';
import {PokeService} from '../../services/poke.service';
import {IResults} from '../../models/pokemonapi';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit{

  listaPoke: IResults[] = [];
  select?: IResults;

  lista$ = this.service.getAll()
    .pipe(
      filter(resp => !!resp.results.length),
      map(response => response.results)
  );
  constructor(
    readonly service: PokeService
  ) {
  }
  ngOnInit(): void {
    this.service.getAll()
      .pipe(
        map(resposnse => resposnse.results)
      )
      // .subscribe(data => {
      //   this.listaPoke = data;
      //   console.log(data);
      // })
  }

  setElement(item: IResults) {
    this.select= item;
    console.log(item);
    /*
    * posso chiamare un modal
    * posso aprire un card
    * posso andare nella pagina della modifica ed inserimento
    * */
  }
}
