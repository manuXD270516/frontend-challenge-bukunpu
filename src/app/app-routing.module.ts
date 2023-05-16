import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/creation', component: UserCreationComponent },
  { path: 'users/edit/:nombre', component: UserEditComponent, canActivate: [UserGuard] },
  { path: 'users/:nombre', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
