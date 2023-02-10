import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
   

  constructor(private readonly userService:UserService,private readonly router:Router){}

  addElement(){
    this.userService.getUsers().subscribe({
      next:(res)=>{
        console.log(res,'next');
        this.router.navigate(['insert'],{
          state:{
            insertUser:res
          }
        })
      },
      error(err){
        console.error(err,'errore');
      },
      complete:()=>{
        console.info('observe completato');
      }
    });
  }
}
