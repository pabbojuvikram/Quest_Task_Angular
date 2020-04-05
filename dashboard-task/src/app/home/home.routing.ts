import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from '../home/pages/home.component';                                // './home/index';
import { LoginComponent } from '../home/pages/login';                                         // './login/index';
import { RegisterComponent } from '../home/pages/register';                                       // './register/index';
import { AuthGuard } from '../_guards/index';                                                 // './_guards/index';

import { from } from 'rxjs';
export const routes: Routes = [
      // path: '',
      // children: [
      //   {
        // {
        //   path: '',
        //   component: LoginComponent
        // },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'dashboard',
          canActivate : [AuthGuard],
        },
        {
          path: '**',
          component: HomeComponent
        }
      ];
//     },
// ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
