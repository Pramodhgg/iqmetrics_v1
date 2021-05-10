import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {ContactUSData} from './contact-us.model'


@Injectable({providedIn:'root'})
export  class ContactUsService{

    private queries:ContactUSData[]=[];
    private allQueries :ContactUSData[]=[];
    private mappedAllQueries = new Subject<ContactUSData[]>();
    private mappedQueries = new Subject<{queries:ContactUSData[], queryCount:number}>();
    constructor(public http: HttpClient,
        public router: Router){}


        saveContactUsQuery(contactData:ContactUSData){
            console.log(contactData)
            this.http.post<{message:string}>("http://localhost:3000/api/contact-us", contactData)
            .subscribe((response)=>{
                console.log(response.message)
            })
        }


        
    getallQueries(queriesPerPage:number, currentPage:number){
        const queryParams = `?pageSize=${queriesPerPage}&page=${currentPage}`
        // return [...this.events];
        this.http.get<{message:string, queries:any, totalQueries:number,queryRecords:any}>('http://localhost:3000/api/contact-us/queries'+queryParams)
        .pipe(map((queriesData)=>{
            console.log(queriesData.queryRecords)
            return {
                queries:queriesData.queries.map(query=>{
                return{
                    userId:query._id,
                    name:query.name,
                    number:query.number,
                    email:query.email,  
                    designation:query.designation,
                    message:query.message  
                }
            }),
             allQueries:queriesData.totalQueries
            };            
        }))
        .subscribe((mappedQueries)=>{ 
            console.log(mappedQueries.allQueries)
            this.queries=mappedQueries.queries;
            this.mappedQueries.next({queries:[...this.queries], queryCount:mappedQueries.allQueries});
        });
    }

    getQueries(){
        // return [...this.events];
        this.http.get<{message:string, allQueries:any}>('http://localhost:3000/api/contact-us/allqueries')
        .pipe(map((queryData)=>{
            console.log(queryData);
            
            return queryData.allQueries.map(query=>{
                return{
                    userId:query._id,
                    name:query.name,
                    number:query.number,
                    email:query.email,  
                    designation:query.designation,
                    message:query.message  
                }
            });
        }))
        .subscribe((mappedAllQueries)=>{
            console.log(mappedAllQueries)
            this.allQueries=mappedAllQueries;
            this.mappedAllQueries.next([...this.allQueries]);
        });
    }
    getUpdatedQueryList(){
        return this.mappedQueries.asObservable();
    }

    getAllUpdatedQueryList(){
        return this.mappedAllQueries.asObservable();
    }
}