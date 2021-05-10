import { Component, HostListener, OnInit } from '@angular/core';
import { faBars, faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  var: boolean = false;
  white_nav = false;
  faBars = faBars;
  mobile_nav = false;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('document:wheel', ['$event'])
  scrollfunction() {
    if (document.documentElement.scrollTop > 200) {
      this.white_nav = true;
    } else {
      this.white_nav = false;
    }

  }

  showNav() {
    console.log('here');

    if (this.mobile_nav) {
      this.mobile_nav = false;
    } else {
      this.mobile_nav = true;
    }
  }
  toHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    this.white_nav = false;
    this.mobile_nav = false;
  }

  toAboutUs() {
    document.getElementById('about__us').scrollIntoView({ behavior: 'smooth' });
    this.white_nav = true;
    this.mobile_nav = false;
  }

  toServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    this.white_nav = true;
    this.mobile_nav = false;
  }

  toContactUs() {
    document
      .getElementById('contact-us')
      .scrollIntoView({ behavior: 'smooth' });
    this.white_nav = true;
    this.mobile_nav = false;
  }
}
