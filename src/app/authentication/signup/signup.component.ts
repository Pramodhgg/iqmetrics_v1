import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading= false;
  private authStatusSub: Subscription;
  constructor(public authService: AuthService) { }


  onSignUp(form:NgForm){
    if(form.invalid){
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.email,form.value.password,form.value.username)
}

  ngOnInit(): void {
   this.authStatusSub = this.authService.getAuthStatus().subscribe(
     authstatus=>{
       this.isLoading=false;
     }
   );
    }

    ngOnDestroy(){
      this.authStatusSub.unsubscribe();
    }

}