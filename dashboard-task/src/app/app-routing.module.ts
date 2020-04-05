import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './common/app-layout/app-layout.component';
import { AuthLayoutComponent } from './common/auth-layout/auth-layout.component';

import { CONTENT_ROUTES } from './shared';

import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: AppLayoutComponent,
    children: CONTENT_ROUTES
  },
  { path: '**', redirectTo: 'AppLayoutComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
 })
export class AppRoutingModule { }
