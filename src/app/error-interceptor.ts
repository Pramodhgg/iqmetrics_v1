import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

    constructor(private dialog : MatDialog){}

    intercept(req:HttpRequest<any>, next:HttpHandler){
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                let errorMessage ="An unkown error occured"
                console.log(error);
                if(error.error.message){
                    errorMessage = error.error.message;
                }
                return throwError(error)
                
            })
        );
    }
}