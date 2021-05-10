import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { EventsService } from 'src/app/event/events.service';
import { Enroll } from 'src/app/event/upcoming-events/enroll.model';
import { ContactUSData } from '../../contact-us.model';
import { ContactUsService } from '../../contact-us.service';
import { XlxService } from '../query-details/xlsService.service';

@Component({
  selector: 'app-enrolled-details',
  templateUrl: './enrolled-details.component.html',
  styleUrls: ['./enrolled-details.component.css'],
})
export class EnrolledDetailsComponent implements OnInit, OnDestroy {
  enrolledDetailsList: Enroll[] = [];

  isLoading = false;

  private enrollSub = new Subscription();
  name: string;
  constructor(
    private eventService: EventsService,
    private excelService: XlxService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.eventService.getEnrolledDataLists();
    const enrollSub = this.eventService
      .getUpdatedEnrolledLists()
      .subscribe((enrolledData) => {
        this.isLoading = false;

        this.enrolledDetailsList = enrolledData;
        console.log(this.enrolledDetailsList);
      });
  }

  ngOnDestroy(): void {
    this.enrollSub.unsubscribe();
  }

  downloadXlSheet() {
    this.excelService.exportAsExcelFile(this.enrolledDetailsList, 'Query');
  }

  search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.enrolledDetailsList = this.enrolledDetailsList.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
}
