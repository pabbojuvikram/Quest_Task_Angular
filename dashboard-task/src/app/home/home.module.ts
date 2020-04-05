import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';

import { HomeComponent } from './pages/home.component';
import { SharedModule } from '../shared';


import { MatDialogModule } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import {FormsModule} from '@angular/forms';
// import { TreeviewModule } from 'ngx-treeview';
import {LoginComponent} from '../home/pages/login/login.component';
import {RegisterComponent} from '../home/pages/register/register.component';
import { AuthenticationService, UserService, AlertService } from '../_services';

import { fakeBackendProvider } from '../_helpers/index';                                  // './_helpers/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../_helpers/index';
import {HomeRoutingModule } from '../../app/home/home.routing';                                                      // './app.routing';
import { AlertComponent } from '../_directives/index';
import { AuthGuard } from '../_guards/index';
@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,

        ],
    imports: [
        HomeRoutingModule,
        SharedModule,
        HomeRoutingModule,
        FormsModule,
        HttpClientModule
        // TreeviewModule.forRoot()
    ],
    exports: [],
    providers: [{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }, 
        AuthGuard,
        AuthenticationService, 
        UserService, 
        AlertService,
    
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    entryComponents: [ ]
})
export class HomeModule {}
