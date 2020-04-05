import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { User} from '../../models/user';
import {Router} from '@angular/router';
// import {OwlcarouselService} from '../../services/owlcarousel.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.css']
})
export class HeaderComponent implements OnInit {
    Totallocationdata: any;
    selectedValue: any;
    showMyContainer: boolean = false;
    isUserLoggedin: boolean = false;
    customerName: string;
    // login: boolean = true;
    // afterlogin: boolean = false;
    loader: boolean;
    // Dashbaord-show: false;
    contentshow() {
      this.showMyContainer = true;
    }
    hideLocations() {
        this.locationContent = false;
        if ($('#video-modal1').css('display') === 'block') {
            $('.svgDownArrow').removeClass('rotate');
            $('#video-modal1').slideUp(300);
            $('#MobLocbtn').css({
                'color': '#000'
            });
        } else {
            $('.svgDownArrow').addClass('rotate');
            $('#video-modal1').slideDown(300);

        }
    }
  currentUser: User;
   constructor(private router: Router) { // private location: OwlcarouselService,
    //  this.currentUser = this.authenticationService.currentUserValue;
  }

  locationContent: boolean;
  showLocation() {
      this.locationContent = !this.locationContent;
      if ($('#video-modal1').css('display') === 'block') {
        $('.svgDownArrow').removeClass('rotate');
        $('#video-modal1').slideUp(300);
        $('#MobLocbtn').css({
            'color': '#000'
        });
    } else {
        $('.svgDownArrow').addClass('rotate');
        $('#video-modal1').slideDown(300);
    }
  }


  ngAfterViewChecked() {
    if (this.isLoggedInUser()) {
      this.isUserLoggedin = true;
    }
  }

  ngOnInit() {
    // if (this.isLoggedInUser()) {
    //   this.isUserLoggedin = false;
    // }

    $(window).scroll( function() {
      const sc = $(window).scrollTop();
      if (sc > 100) {
          $('#header-sroll').addClass('small');
          // commonService1.layoutTop = false;
      } else {
          $('#header-sroll').removeClass('small');
          // commonService1.layoutTop = true;
      }
  });

    // this.location.locationdata(this.selectedValue, (data) => {
    // this.loader = true;
    // // console.log('Selection of  location data ------->', data);
    // this.Totallocationdata = data.Data;
    // this.loader = false;
    // // console.log('Location data in header DATA---->', this.Totallocationdata);
    // });

  }
  handleLocationSearch(loc: any, city, subLoc, area) {
    this.locationContent = false;
    console.log("handle location search called ...........>>>")
    this.router.navigate(['dynamiccards', city, subLoc, area, loc.Latitude, loc.Longitude, loc.Level]);
  }
  logout() {
    console.log('user is logOut');
    sessionStorage.removeItem('customerDetails');
    this.isUserLoggedin = false;
    this.router.navigate(['/home']);
  }

  isLoggedInUser() {
    let user: any = sessionStorage.getItem('customerDetails');

    user = JSON.parse(user);

    if (user) {
      this.customerName = user.CustomerDetails[0].CustomerName;
      // console.log('Customer details Object-->', user);
      // console.log('Customer details form session storage-->', user);
      return true;
    }
    return false;
  }
 }
