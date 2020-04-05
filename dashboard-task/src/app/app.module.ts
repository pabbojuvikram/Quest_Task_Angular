import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Response, Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import { AppLayoutComponent } from './common/app-layout/app-layout.component';
import { AuthLayoutComponent } from './common/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './common/header/header.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
// import { HomeComponent } from './home/pages/home.component';
// import { CarouselComponent} from './home/pages/carousel/carousel.component';
// import {SharedOccupancyComponent} from './home/pages/shared-occupancy/shared-occupancy.component';
// import {CoupleroomComponent} from './home/pages/coupleroom/coupleroom.component';
// import {BottomcarouselComponent} from './home/pages/bottomcarousel/bottomcarousel.component';
// import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    HomeComponent,
    // HomeComponent,
    // CarouselComponent,
    // SharedOccupancyComponent,
    // CoupleroomComponent,
    // BottomcarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // GooglePlaceModule,
  ],
   providers: [
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
