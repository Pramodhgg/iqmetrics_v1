import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  isLoading= false;
  private authStatusSub: Subscription;
  private errorSub : Subscription;
  errorMessage:string="";
  constructor(public authService:AuthService) { }


  onLogin(form:NgForm){
      console.log(form)
      if(form.invalid){
        return
      }
      this.isLoading =true;
      this.authService.login(form.value.email,form.value.password);
  }

  
  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatus().subscribe(
      authstatus=>{
        this.isLoading=false;
      }
    );
    this.errorSub= this.authService.getErrorMessage().subscribe(
      errorMessage=>{
        this.errorMessage = errorMessage;
        console.log(`hope it wroks man ${this.errorMessage}`)
      }
    )
     }

     
    ngOnDestroy(){
      this.authStatusSub.unsubscribe();
      this.errorSub.unsubscribe();
    }


}
