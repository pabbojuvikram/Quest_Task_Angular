import { Routes } from '@angular/router';
import { AuthModule} from '../../auth/auth.module';

export const CONTENT_ROUTES: Routes = [

  {
    path: '',
    loadChildren: 'src/app/home/home.module#HomeModule',
  },
  {
    path: 'home',
    loadChildren: 'src/app/home/home.module#HomeModule'
  },
];
