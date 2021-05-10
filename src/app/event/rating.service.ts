import { Injectable } from '@angular/core';
import { Rating } from '../event/rating.model';
import {Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({providedIn:'root'})
export class RatingService{
        private userRatings: Rating[]=[];

        private updatedRatings = new Subject<Rating[]>();

        constructor(public http : HttpClient,
            public route: Router){}

            addRating(eventId:string, creator:string, rating:number){
                console.log("inside addRating")
                const userRating:Rating ={
                   eventId:eventId,
                   creator:creator,
                   rating:rating
                }
                console.log(userRating)
                this.http.post<{message:string, rating:any}>('http://localhost:3000/api/addRating', userRating)
                .subscribe(responseData=>{
                    console.log(responseData);
                    this.userRatings.push(userRating);
                    this.updatedRatings.next([...this.userRatings])
                    console.log(this.updatedRatings)
                })
            }
        }