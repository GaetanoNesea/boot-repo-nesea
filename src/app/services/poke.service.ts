import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPokeapi, IPokemon, IResults} from '../models/pokemonapi';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private _baseApi = 'https://pokeapi.co/api/v2/pokemon';
  lista: IResults[] = [];
  // creare un proprs per la lista dei poke

  constructor(
    private readonly pokeApi: HttpClient
  ) { }


  getAll(name?: string):Observable<IPokeapi>{
    return this.pokeApi.get<IPokeapi>(!name ? `${this._baseApi}` : `${this._baseApi}/${name}`);
  }

  /**
   * @description get one pokemon with pokemon name
   */
  getPoke(name:string):Observable<IPokemon>{
    return this.pokeApi.get<IPokemon>(this._baseApi+"/"+name);
  }
  // nuovo service con il name

}
