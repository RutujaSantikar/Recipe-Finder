import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { SnackbarService } from './snackbar.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
   
  constructor(private http: HttpClient,private afAuth:AngularFireAuth, private snackbarService:SnackbarService,private router:Router) { }
 
  
  signup(email: string, password: string) {
    
    this.afAuth['createUserWithEmailAndPassword'](email, password).then((userCredential: any) => {
      console.log(userCredential);
      this.snackbarService.successSnackBar('Signup Successful');
      this.router.navigate(['/favorites'])
    })
    //   .catch((error: any) => {
    //   let errorMessage = 'An unknown error occured';
    //   if (error?.message) {
    //     errorMessage = this.getFirebaseErrorMessage(error.message);
    //   }
    //   this.snackbarService.errorSnackBar(errorMessage)
    // })
     .catch((error: HttpErrorResponse) => {
       this.snackbarService.errorSnackBar(error.message)
     })
    

  }
  login(email:string, password:string) {
    
    this.afAuth['signInWithEmailAndPassword'](email, password).then((userCredential: any) => {
      console.log(userCredential);
      this.snackbarService.successSnackBar('Login Successful');
      this.router.navigate(['/favorites'])
    })
    //   .catch((error: any) => {
    //   let errorMessage = 'An unknown error occured';
    //   if (error?.message) {
    //     errorMessage = this.getFirebaseErrorMessage(error.message);
    //   }
    //   this.snackbarService.errorSnackBar(errorMessage)
    // })
    //   .catch((error: HttpErrorResponse) => {
    //     let errorMessage;
    //     console.log(error.message)
    //     if (error.message === "auth/email-already-in-use") {
    //        errorMessage="This email already exists"
    //     }
    //     else if (error.message === "auth/invalid-email") {
    //       errorMessage = "This email does not exist"
    //     }
    //     else if (error.message === "auth/wrong-password") {
    //        errorMessage = "This password is not correct"
    //     }
       
    //     this.snackbarService.errorSnackBar(errorMessage)
    //     return null;
    // })
      .catch((error: HttpErrorResponse) => {
       this.snackbarService.errorSnackBar(error.message)
    })
     

  }
  
  // private getFirebaseErrorMessage(error: string): string {
  //   switch (error) {
  //     case 'auth/email-already-in-use':
  //       return 'This email already exists';
  //     case 'auth/invalid-email':
  //       return 'Invalid email address';
  //     case 'auth/weak-password':
  //       return 'Weak password, please use a stronger one';
  //     case 'auth/user-not-found':
  //     case 'auth/wrong-password':
  //       return 'Invalid email or password';
  //     default:
  //       return 'An unknown error occurred';
  //   }
  // }

  // private handleError(errorRes : HttpErrorResponse) {
  //     let errorMessage = 'An unknown error occured';
  //     if (!errorRes.error || !errorRes.error.error) {
  //       // return throwError(errorMessage);
  //       switch (errorRes.error.errors.message) {
  //         case 'EMAIL_EXISTS':
  //           errorMessage = 'This email already exists'
  //           break;
  //         case 'EMAIL_NOT_FOUND':
  //           errorMessage = 'This email does not exists'
  //           break;
  //         case 'INVALID_PASSWORD':
  //           errorMessage = 'This password is not correct'
  //           break;
          
  //        }
  //     }
  //        return throwError( errorMessage)
  //  }

  
}



