import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import {Router} from '@angular/router';
import {HttpModule} from '@angular/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    constructor() {
    }
    ngOnInit(){
        
    }
}
