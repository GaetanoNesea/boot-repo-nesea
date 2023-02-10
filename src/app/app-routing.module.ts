import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertUserComponent } from './components/insert-user/insert-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { PatchUserComponent } from './components/patch-user/patch-user.component';

const routes: Routes = [
  {path:'lista',component: ListUsersComponent},
  {path:'insert',component: InsertUserComponent},
  {path:'modifica',component: PatchUserComponent},
  {path:'', redirectTo: 'lista', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
