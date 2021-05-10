import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './authData.model';
import { map } from 'rxjs/operators';



@Injectable({providedIn:'root'})
export class AuthService{

    private jwtToken : string;
    private timer : any;
    private isAuthencticated=false;
    private userId:string;
    private userRole:string;
    private authStatusHolder = new Subject<boolean>();
    private errorHolder = new Subject<string>();
    private successMessageHolder :string;
    private users:AuthData[]=[]
    private updatedUsers = new Subject<any>();


    constructor(public http: HttpClient,
                public router: Router,
                public dialog: MatDialog){}

    getToken(){
        return this.jwtToken;
    }

    getAuthStatus(){
        return this.authStatusHolder.asObservable();
    }

    getIsAuthenticated(){
        return this.isAuthencticated;
    }

   
    createUser(email:string, password:string,username:string){
        const authData: AuthData ={
            id:null,
            email:email,
             password:password,
             name:username
            }
            console.log(authData)
        this.http.post<{id:string}>("http://localhost:3000/api/user/signup", authData)
        .subscribe(response=>{
            console.log(response);
            const id= response.id
            authData.id= id;
            this.users.push(authData);
            this.updatedUsers.next([...this.users])
            this.router.navigate(['/']);
        }, error =>{
            this.authStatusHolder.next(false);
        });
    }


    login(email:string, password:string){
        const authData={
            email:email,
             password:password
            }
        this.http.post<{token :string, user:object, expiresIn:number, userId:string, userRole:string, message:string}>("http://localhost:3000/api/user/login", authData)
        .subscribe(response=>{
            const token = response.token;
            const user = response.userId;
            this.jwtToken = token;
            if(token){
                const expiresInDUration = response.expiresIn;
                this.setAuthTimer(expiresInDUration)
            
                this.isAuthencticated=true;
                this.userId = response.userId;
                this.userRole = response.userRole;
                console.log("this is user +: "+ this.userId + " with role : " + this.userRole)

                this.authStatusHolder.next(true);
                const currentDate = new Date();
                const expiryDate = new Date(currentDate.getTime() + expiresInDUration*1000);
                console.log(expiryDate);
                this.saveAuthData(token,expiryDate,this.userId, this.userRole)
                this.dialog.closeAll();
                this.successMessageHolder=response.message;
                console.log(response.message);
                
                this.router.navigate(['/']);    
 
            }
        }, error=>{
            this.authStatusHolder.next(false);
            this.errorHolder.next(error.error.message);
        })
    }

    getallUser(){
        // return [...this.events];
        this.http.get<{message:string, users:any}>('http://localhost:3000/api/user/users')
        .pipe(map((userData)=>{
            return userData.users.map(user=>{
                return{
                    userId:user._id,
                    name:user.name,
                    email:user.email,
                    role:user.role
                    
                }
            });
        }))
        .subscribe((mappedUsers)=>{
            console.log(mappedUsers)
            this.users=mappedUsers;
            this.updatedUsers.next([...this.users]);
        });
    }

    getAllUpdatedUSers(){
       return this.updatedUsers.asObservable();
    }

getErrorMessage(){
    return this.errorHolder.asObservable();
}
getSuccessMessage(){
    return this.successMessageHolder;
}


    getUserId(){
        return this.userId;
    }

    getUserRole(){
        return this.userRole;
    }

    autoAuthenticateUser(){
       const userAuthInformation= this.getAuthData()
       if(!userAuthInformation){
           return;
       }
       const now = new Date();
       const expiresIn = userAuthInformation.expirationDate.getTime()-now.getTime();
       if(expiresIn>0){
           this.jwtToken=userAuthInformation.token;
           this.isAuthencticated=true;
           this.userId = userAuthInformation.userId;
           this.userRole =userAuthInformation.userRole;
           this.setAuthTimer(expiresIn/1000)
           this.authStatusHolder.next(true);
       }
    }

    logout(){
        this.jwtToken= null;
        this.isAuthencticated=false;
        this.authStatusHolder.next(false);
        this.userId= null;
        this.userRole=null;
        clearTimeout(this.timer);
        this.clearAuthData();
        this.successMessageHolder = "Logged out successfully"
        this.router.navigate(['/']);    
        
    }

    private setAuthTimer(expiresInDUration:number){
        console.log("setting time "+expiresInDUration)
        this.timer = setTimeout(()=>{
            this.logout();
        },expiresInDUration*1000);
    }

    private saveAuthData(token : string, expirationDate:Date, userId:string, userRole:string){
        localStorage.setItem('token', token)
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('userRole', userRole);

    }

    private clearAuthData(){
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
    }

    private getAuthData(){
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        const userId = localStorage.getItem("userId")
        const userRole = localStorage.getItem("userRole")
        if(!token && !expirationDate){
            return;
        }
        return {
            token:token,
            expirationDate:new Date(expirationDate),
            userId:userId,
            userRole:userRole
        }
    }
}