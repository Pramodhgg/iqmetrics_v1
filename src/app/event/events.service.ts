import { Injectable } from '@angular/core';
import { Event } from '../event/event.model';
import { Enroll } from './upcoming-events/enroll.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private events: Event[] = [];
  private enrolledListData: Enroll[] = [];
  private updatedEnrolledData = new Subject<Enroll[]>();

  private updatedEvents = new Subject<Event[]>();

  constructor(public http: HttpClient, public route: Router) {}

  getEvents() {
    // return [...this.events];
    this.http
      .get<{ message: string; events: any }>('http://localhost:3000/api/event')
      .pipe(
        map((eventData) => {
          return eventData.events.map((event) => {
            return {
              id: event._id,
              title: event.title,
              author: event.author,
              duration: event.duration,
              startsFrom: event.startsFrom,
              time: event.time,
              creator: event.creator,
            };
          });
        })
      )
      .subscribe((mappedEvents) => {
        console.log(mappedEvents);
        this.events = mappedEvents;
        this.updatedEvents.next([...this.events]);
      });
  }

  getUpdatedEventListener() {
    return this.updatedEvents.asObservable();
  }

  getEventById(id: string) {
    console.log('inside');
    return this.http.get<{
      _id: string;
      title: string;
      author: string;
      duration: string;
      startsFrom: string;
      time: string;
    }>('http://localhost:3000/api/event/' + id);
  }

  addEvent(
    title: string,
    author: string,
    duration: string,
    startsFrom: string,
    time: string,
    creator: string
  ) {
    const event: Event = {
      id: null,
      title: title,
      author: author,
      duration: duration,
      startsFrom: startsFrom,
      time: time,
      creator: null,
    };
    this.http
      .post<{ message: string; eventId: string; user: any }>(
        'http://localhost:3000/api/event',
        event
      )
      .subscribe((resposneData) => {
        console.log('user :' + resposneData.user);
        console.log(resposneData.eventId);
        const id = resposneData.eventId;
        event.id = id;
        this.events.push(event);
        this.updatedEvents.next([...this.events]);
        this.route.navigate(['/']);
      });
  }

  updateEvent(
    id: string,
    title: string,
    author: string,
    duration: string,
    startsFrom: string,
    time: string,
    creator: string
  ) {
    const event: Event = {
      id: id,
      title: title,
      author: author,
      duration: duration,
      startsFrom: startsFrom,
      time: time,
      creator: null,
    };
    this.http
      .put('http://localhost:3000/api/event/' + id, event)
      .subscribe((response) => {
        const clonedEvents = [...this.events];
        const oldEventIndex = clonedEvents.findIndex((e) => {
          e.id === event.id;
        });
        clonedEvents[oldEventIndex] = event;
        this.events = clonedEvents;
        this.updatedEvents.next([...this.events]);
        this.route.navigate(['/']);
      });
  }

  deleteEvent(eventId: string) {
    this.http
      .delete('http://localhost:3000/api/event/' + eventId)
      .subscribe(() => {
        const eventUpdated = this.events.filter(
          (event) => event.id !== eventId
        );
        this.events = eventUpdated;
        this.updatedEvents.next([...this.events]);
      });
  }

  addEnrollDetails(name: string, email: string, number: number) {
    const enrollDetails: Enroll = {
      id: null,
      name,
      email,
      number,
    };
    console.log(enrollDetails);

    this.http
      .post<{ message: string }>(
        'http://localhost:3000/api/contact-us/enroll',
        enrollDetails
      )
      .subscribe((result) => {
        console.log(result.message);
      });
  }

  getEnrolledDataLists() {
    this.http
      .get<{ enrolledDetails: any; message: string }>(
        'http://localhost:3000/api/contact-us/getEnrolledDetails'
      )
      .pipe(
        map((enrolledData) => {
          console.log(enrolledData);

          return enrolledData.enrolledDetails.map((data) => {
            return {
              id: data._id,
              name: data.name,
              email: data.email,
              number: data.number,
            };
          });
        })
      )
      .subscribe((mappedEnrolledData) => {
        console.log(mappedEnrolledData);
        this.enrolledListData = mappedEnrolledData;
        this.updatedEnrolledData.next([...this.enrolledListData]);
      });
  }
  getUpdatedEnrolledLists() {
    return this.updatedEnrolledData.asObservable();
  }
}
