import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar-for-pages',
  templateUrl: './navbar-for-pages.component.html',
  styleUrls: ['./navbar-for-pages.component.css'],
})
export class NavbarForPagesComponent implements OnInit {
  white_nav = false;
  navDetailss = false;
  faCoffee = faStar;
  faHalfStar = faStarHalf;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener('document:wheel', ['$event'])
  scrollfunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      this.white_nav = true;
    } else {
      this.white_nav = false;
    }
    if (
      document.body.scrollTop > 170 ||
      document.documentElement.scrollTop > 170
    ) {
      this.navDetailss = true;
    } else {
      this.navDetailss = false;
    }
  }

  // toHome(){
  //   this.router.navigate['/']
  //   document.getElementById("home").scrollIntoView({behavior: 'smooth'});
  //   this.white_nav=false;

  // }

  // toAboutUs(){
  //   this.router.navigate['/']
  //   document.getElementById("about__us").scrollIntoView({behavior: 'smooth'});
  //   this.white_nav=true;

  // }

  // toServices(){
  //   document.getElementById("services").scrollIntoView({behavior: 'smooth'});
  //   this.white_nav=true;

  // }

  // toContactUs(){
  //   document.getElementById("contact-us").scrollIntoView({behavior: 'smooth'});
  //   this.white_nav=true;

  // }
}
