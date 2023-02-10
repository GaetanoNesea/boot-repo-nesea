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

  myForm:FormGroup=new FormGroup ({
    id: new FormControl("",Validators.required),
		nome: new FormControl("",Validators.required),
		username: new FormControl("",Validators.required),
    email: new FormControl("", [Validators.required,Validators.email, Validators.pattern(".+@globex\.com")]),
	  phone: new FormControl("",Validators.required),
		website: new FormControl("", Validators.required),
						
		})
    submit() {

      console.log(this.myForm.status, 'status form');
      console.log('valid?', this.myForm.valid);
      console.log('email', this.myForm.value.email);
  
      }

  item?:IUser

  constructor(private readonly router:Router){

    console.log( this.item= this.router.getCurrentNavigation()!.extras.state!['insertUser']);
    
    this.item= this.router.getCurrentNavigation()!.extras.state!['insertUser'];
  }

 

}
