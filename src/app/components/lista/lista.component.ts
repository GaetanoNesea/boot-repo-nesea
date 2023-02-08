import {Component, OnInit} from '@angular/core';
import {PokeService} from '../../services/poke.service';
import {IResults} from '../../models/pokemonapi';
import {filter, map} from 'rxjs';
import { Router } from '@angular/router';

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
      //filter(resp => !!resp.results.length),
      map(response => response.results)
  );
  constructor(
    readonly service: PokeService, private readonly router:Router
  ) {
  }
  ngOnInit(): void {
    // this.service.getAll()
    //   .pipe(
    //     map(resposnse => resposnse.results)
    //   )
      // .subscribe(data => {
      //   this.listaPoke = data;
      //   console.log(data);
      // })
  }


  setElement(item: IResults) {
    this.select= item;
    this.service.getPoke(item.name).subscribe({
      next: (res) => {
        console.log(res, 'next');
        this.router.navigate(['item'],{
          state:{
            pokemon:res
          }
        })
      },
      error(err) {
        console.error(err, 'error')
      },
      complete: () => {
        console.info('Observe completato');
      }
    })
    // this.router.navigate(['item'],{
    //   state:{
    //     user:item
    //   }
    // })
    console.log(item);
    // inserire il service con il noem dell'item
    /*
    * posso chiamare un modal
    * posso aprire un card
    * posso andare nella pagina della modifica ed inserimento
    * */
  }
}
