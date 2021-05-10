import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ContactUSData } from './contact-us.model';
import { ContactUsService } from './contact-us.service';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-contactus',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  isLoading=false;
  isSuccess=false;
  faCheckCircle=faCheckCircle;
  constructor(private contactusService: ContactUsService) { }

  ngOnInit(): void {
  }


  onSubmitForm(form:NgForm){
    if(form.invalid){
      return;
    }

    this.isLoading=true

    setTimeout(()=>{
      this.isLoading=false
    },500)
    this.isSuccess=true

    const contactData : ContactUSData ={
      name:form.value.name,
      number:form.value.number,
      email:form.value.email,
      designation:form.value.designation,
      message:form.value.message
    }

    this.contactusService.saveContactUsQuery(contactData)
  }
}
