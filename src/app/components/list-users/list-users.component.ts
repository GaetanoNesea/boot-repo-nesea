import { Component } from '@angular/core';
import { map } from 'rxjs';
import { IUser } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {

  lista$=this.userService.getUsers()
  .pipe(
    map(response=>this.userService.list = response));
   

  constructor(private readonly userService:UserService){}

  setElement(item: IUser){
    console.log(item);
  }
}
