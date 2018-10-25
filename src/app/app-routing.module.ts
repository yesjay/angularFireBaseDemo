import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth-guard.service';
import { UserModifyComponent } from './user-modify/user-modify.component';

const routes: Routes = [{ 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, { 
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
    
  }, {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  }, {
    path: 'user/modify/:id',
    component: UserModifyComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'user/create',
    component: UserModifyComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
