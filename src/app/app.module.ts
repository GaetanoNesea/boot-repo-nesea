import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { InsertUserComponent } from './components/insert-user/insert-user.component';
import { PatchUserComponent } from './components/patch-user/patch-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    InsertUserComponent,
    PatchUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
