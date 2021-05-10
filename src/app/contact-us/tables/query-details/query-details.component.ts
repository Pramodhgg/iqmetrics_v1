import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { ContactUSData } from '../../contact-us.model';
import { ContactUsService } from '../../contact-us.service';
import { XlxService } from './xlsService.service';


@Component({
    selector: 'app-contact-us',
    templateUrl: './query-details.component.html',
    styleUrls: ['./query-details.component.css']
  })
export class QueryDetailsComponent implements OnInit, OnDestroy{

    queries:ContactUSData[]=[];
    allQueries:ContactUSData[]=[];

    isLoading=false;
    totalQueries = 0;
    queriesPerPage = 3;
    currentPage=1;

    name:any;

    private querySub = new Subscription;
    private allQuerySub = new Subscription;
    constructor(private contactService: ContactUsService,
                private excelService:XlxService){}
  

    ngOnInit(): void {
        this.isLoading=true;
        this.contactService.getallQueries(this.queriesPerPage, this.currentPage);
        this.contactService.getQueries();
        this.querySub = this.contactService.getUpdatedQueryList()
        .subscribe((queryData:{queries:ContactUSData[],queryCount:number})=>{
            this.isLoading=false;
            this.queries = queryData.queries
            this.totalQueries=queryData.queryCount;
            console.log(queryData.queryCount)
            console.log(`this is all query ${this.queries}`)
        });

        this.allQuerySub = this.contactService.getAllUpdatedQueryList()
        .subscribe(allqueries=>{
            this.allQueries = allqueries
        })

    }

    ngOnDestroy(): void {
            this.querySub.unsubscribe();
            this.allQuerySub.unsubscribe();
        }

    downloadXlSheet(){
            this.excelService.exportAsExcelFile(this.allQueries,'Query');
        }

    onChangedPage(pageData:PageEvent){
            this.isLoading=true;
            this.currentPage = pageData.pageIndex+1;
            this.queriesPerPage =  pageData.pageSize
            this.contactService.getallQueries(this.queriesPerPage, this.currentPage);
        }

        search(){
            if(this.name==""){
                this.ngOnInit();
            }
            else{
                this.queries = this.allQueries.filter(res=>{
                    return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                })
            }
        }
}