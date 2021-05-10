import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit,OnDestroy {
  users:[]=[]
  private userSub: Subscription
  constructor(public authService:AuthService) { }
  

  ngOnInit(): void {
     this.authService.getallUser();
     this.userSub = this.authService.getAllUpdatedUSers()
     .subscribe(users=>{
      this.users = users;
      console.log(`this is ${this.users}`)
     })
      }

      onSave(userId, username){
        alert(`${userId} and ${username}`)
      }

      ngOnDestroy(): void {
        this.userSub.unsubscribe();
      }
}
