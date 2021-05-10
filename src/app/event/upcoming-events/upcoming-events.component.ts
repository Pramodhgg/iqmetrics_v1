import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';

import { Event } from '../event.model';
import { EventsService } from '../events.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
})
export class UpcomingEventsComponent implements OnInit, OnDestroy {
  id: string;
  eventForm = false;
  images: string;
  events: Event[] = [];
  faCoffee = faStar;
  faHalfStar = faStarHalf;
  faCheckCircle = faCheckCircle;
  isenroll = false;
  isSuccess = false;

  // pastEvents:Event[]=[];
  upcomingEvents: Event[] = [];
  userLoggedIn = false;
  userId: string;
  userRole: string;
  private authSubcription: Subscription;
  private eventSubscription: Subscription;
  todayDate: any;

  constructor(
    public eventService: EventsService,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit() {
    this.images = '../../../assets/img/event3.jpg';
    this.eventService.getEvents();
    this.userId = this.authService.getUserId();
    this.userRole = this.authService.getUserRole();
    this.eventSubscription = this.eventService
      .getUpdatedEventListener()
      .subscribe((events: Event[]) => {
        console.log(events);

        this.events = events;
        this.upcomingEvents = events;
        // const today = new Date()
        // this.todayDate = today.getDate();
        // const hours = today.getHours();
        // const min = today.getMinutes();
        // const timenow =  `${hours}:${min}`;
        // let time = Number(timenow.split(':')[0]) * 60 * 60 * 1000 + Number(timenow.split(':')[1]) * 60 * 1000;

        // console.log(`time is ${time}`);

        // if(this.todayDate<10){
        //     this.todayDate =  `0${this.todayDate}`
        // }
        // const todayMonth = today.getMonth()+1;
        // const todayYear = today.getFullYear();
        // const currentDate =`${todayYear}-${todayMonth}-${this.todayDate}`;
        // this.events.forEach(event => {
        //   const t = event.time;

        //   let ms = Number(t.split(':')[0]) * 60 * 60 * 1000 + Number(t.split(':')[1]) * 60 * 1000;
        //   console.log(ms);

        //   if(currentDate === event.startsFrom && time>ms){
        //     this.pastEvents.push(event)
        //   }
        //   else{
        //     this.upcomingEvents.push(event)
        //   }

        // });
        // console.log(this.pastEvents);
        // console.log(this.upcomingEvents);
      });

    this.userLoggedIn = this.authService.getIsAuthenticated();
    this.authSubcription = this.authService
      .getAuthStatus()
      .subscribe((isAuthenticated) => {
        this.userLoggedIn = isAuthenticated;
        this.userId = this.authService.getUserId();
        this.userRole = this.authService.getUserRole();
      });
    console.log(
      'this is ' + this.userId + 'with ' + this.userRole + ' in events'
    );
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
    this.authSubcription.unsubscribe();
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    navSpeed: 1000,
    navText: ['', ''],
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
    nav: true,
  };
  showEventForm() {
    this.eventForm = true;
  }

  onEventAdded(event) {
    this.events.push(event);
  }

  onDelete(eventId: string) {
    this.eventService.deleteEvent(eventId);
  }

  updateEvents() {
    this.eventService.getEvents();
    this.eventSubscription = this.eventService
      .getUpdatedEventListener()
      .subscribe((events: Event[]) => {
        this.events = events;
      });
  }
  onEnrollSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.eventService.addEnrollDetails(
        form.value.name,
        form.value.email,
        form.value.number
      );
      // this.isSuccess = true;
    }
  }

  isEnroll() {
    if (this.isenroll) {
      this.isenroll = false;
    } else {
      this.isenroll = true;
    }
  }

  // viewmore(){
  //   this.route.navigate(["/programs"])
  // }

  success() {
    this.isSuccess = true;
  }
}
