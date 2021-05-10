import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';

import {Event} from '../event.model'
import {EventsService} from '../events.service'

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  private mode='create';
  isLoading = false;
  userLoggedIn= false;
  private eventId:string;
  event: Event;
  creator:string=null;
  constructor( public eventService: EventsService,
              public route : ActivatedRoute,
              public router: Router,
              public authservice: AuthService) { }

  ngOnInit(): void {
    this.userLoggedIn = this.authservice.getIsAuthenticated();
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
        if(paramMap.has('eventId')){
            this.mode='edit';
            this.eventId=paramMap.get('eventId');
            this.isLoading = true;
            this.eventService.getEventById(this.eventId).subscribe(eventData=>{
            this.isLoading= false;

             this.event ={
               id:eventData._id,
                title:eventData.title,
                author:eventData.author,
                duration:eventData.duration,
                startsFrom:eventData.startsFrom,
                time:eventData.time,
                creator:null
              };
           })
        }
        else{
          this.mode='create';
          this.eventId=null;
        }
    });
  }
  onSaveEvent(form: NgForm) {
    this.userLoggedIn = this.authservice.getIsAuthenticated();
    console.log("why it is "+ this.userLoggedIn)
    if (form.invalid) {
      this.isLoading=false;
      return;
    }
    this.isLoading=true;
    if(this.mode==='create'){
      if(this.userLoggedIn){
        this.eventService.addEvent(form.value.title,form.value.author,form.value.duration,form.value.startsFrom,form.value.time,this.creator)
      }
   

    }else{
      if(this.userLoggedIn){
        this.eventService.updateEvent(this.eventId,form.value.title,form.value.author,form.value.duration,form.value.startsFrom,form.value.time,this.creator);
      }
      else{
        this.router.navigate(['/login'])
      }
    }
    // form.resetForm();
  }

  cancel(){
    this.router.navigate(['/'])
  }

  

}
// const eventData: Event = {
//   id:null,
//   title:form.value.title,
//   author:form.value.author,
//   duration:form.value.duration,
//   startsFrom:form.value.startsFrom,
//   time:form.value.time
// }
