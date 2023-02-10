import { Injectable, OnInit } from '@angular/core';
import { iif, Observable, of, tap } from 'rxjs';
import { IUser } from '../models/users.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  private _baseApi='https://jsonplaceholder.typicode.com/users'

  constructor(private readonly userApi: HttpClient) {}

  list:IUser[]=[];
  
  ngOnInit(): void {}
  
  getUsers(): Observable<IUser[]>{
    return iif<IUser[],IUser[]>(
      () => !this.list.length,
      this.userApi.get<IUser[]>(this._baseApi).pipe(
        tap(response => this.list = response)
      ),
      of(this.list)
    ) 
  }

  insert(item: IUser){
    this.list.push(item);
    console.log('Utente inserito correttamente');
    
}

// modifica(item: IUser){
//   this.getUsers(item)
//   console.log('Utente modificato correttamente');
  

  
}
