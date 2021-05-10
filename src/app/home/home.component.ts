import {
  Component,
  OnDestroy,
  OnInit,
  ɵbypassSanitizationTrustStyle,
} from '@angular/core';
import {
  MatDialog,
  MatDialogClose,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { LoginComponent } from '../authentication/login/login.component';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  userLoggedIn = false;
  successMessage: string = '';
  faPrev = faAngleDoubleLeft;
  faNext = faAngleDoubleRight;

  private authSubcription: Subscription;

  constructor(public dialog: MatDialog, public authservice: AuthService) { }

  close() {
    this.successMessage = '';
  }

  login() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.height = 'auto';
    this.dialog.open(LoginComponent);
  }

  onLogout() {
    this.authservice.logout();
    this.successMessage = this.authservice.getSuccessMessage();
  }

  ngOnInit(): void {
    this.userLoggedIn = this.authservice.getIsAuthenticated();
    this.successMessage = this.authservice.getSuccessMessage();
    this.authSubcription = this.authservice
      .getAuthStatus()
      .subscribe((isAuthencated) => {
        this.userLoggedIn = isAuthencated;
      });

    // $('#owl-carousel').owlCarousel({
    //   dotsContainer : '#customDots'
    // })

    // window.addEventListener('scroll', () => {
    //   const parallaxEffect = document.querySelectorAll('.login');
    //   let srcollPosition = window.pageYOffset;
    //   $('.login').css({
    //     transform: 'translate(0px,' + -srcollPosition * 0.4 + '%)',
    //   });
    // });
  }
  toAboutUs() {
    document.getElementById('about__us').scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.authSubcription.unsubscribe();
  }
  nextIcon = '<span class="material-icons">keyboard_arrow_left</span>';
  prevIcon = '<span class="material-icons">keyboard_arrow_right</span>';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navSpeed: 8000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    autoplayHoverPause: true,
    lazyLoad: true,
    autoHeight: true,
    navText: [this.nextIcon, this.prevIcon],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };
}
