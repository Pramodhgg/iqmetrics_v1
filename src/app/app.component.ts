import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import * as AOS from 'aos';
import { StarRatingComponent } from 'ng-starrating';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    AOS.init();
    this.authService.autoAuthenticateUser();
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

}
