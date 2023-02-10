import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.scss']
})
export class InsertUserComponent{

  items?:IUser[]= this.userService.list;

  myForm:FormGroup=new FormGroup ({
    id: new FormControl("",Validators.required),
		nome: new FormControl("",Validators.required),
		username: new FormControl("",Validators.required),
    email: new FormControl("", [Validators.required,Validators.email, Validators.pattern(".+@globex\.com")]),
	  phone: new FormControl("",Validators.required),
		website: new FormControl("", Validators.required),
						
		})

  constructor(private readonly router:Router,private readonly userService:UserService){
    //this.item=this.router.getCurrentNavigation()!.extras.state!['insertUser'];
  }

  submit() {

    this.items?.push(this.myForm.value)
    console.log(this.items)
    

    }

}
