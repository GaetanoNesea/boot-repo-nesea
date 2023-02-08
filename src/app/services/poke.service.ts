import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPokeapi, IPokemon} from '../models/pokemonapi';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private _baseApi = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private readonly pokeApi: HttpClient
  ) { }


  getAll():Observable<IPokeapi>{
    return this.pokeApi.get<IPokeapi>(`${this._baseApi}`)
  }

  getPoke(name:string):Observable<IPokemon>{
    return this.pokeApi.get<IPokemon>(this._baseApi+"/"+name)
  }
  // nuovo service con il name
  
}
