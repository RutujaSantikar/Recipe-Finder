import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user.model';
import { SnackbarService } from './snackbar.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError,Subject, BehaviorSubject } from 'rxjs';

export interface AuthResponseData{
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?:boolean
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // user = new Subject<User>();
  user = new BehaviorSubject<User | null>(null)
  isLoading!: boolean;
  constructor(
         private http: HttpClient,
    private afAuth: AngularFireAuth,
    private snackbarService: SnackbarService,
    private router: Router) { }
 
  
  signup(email: string, password: string) {
    this.isLoading = true;
    this.afAuth['createUserWithEmailAndPassword'](email, password).then((userCredential: any) => {
      console.log(userCredential);
      this.snackbarService.successSnackBar('Signup Successful');
      this.router.navigate(['/favorites'])
       return userCredential.user;
    }).then((user) => {
      this.handleAuthentication(user.email, user.localId, user.idToken, +user.expiresIn)
    }).catch((error: HttpErrorResponse)=> {
      this.snackbarService.errorSnackBar(error.message)
      return throwError(error);
    }).finally(() => {
      this.isLoading = false
    })
  }
  login(email:string, password:string) {
     this.isLoading= true
    this.afAuth['signInWithEmailAndPassword'](email, password).then((userCredential: any) => {
      console.log(userCredential);
      this.snackbarService.successSnackBar('Login Successful');
      this.router.navigate(['/favorites'])
      return userCredential.user;
    }).then((user) => {
      this.handleAuthentication(user.email, user.localId, user.idToken, +user.expiresIn)
    }).catch((error: HttpErrorResponse)=> {
      this.snackbarService.errorSnackBar(error.message)
      return throwError(error);
    }).finally(() => {
      this.isLoading=false
    })
  }
  
  logOut() {
    this.user.next(null)
    this.router.navigate(['/signup'])
  }
  private handleAuthentication(email: string, userId:string,token: string, expiresIn: number) {
      const expirationDate = new Date(new Date().getTime() +  +expiresIn * 1000);
      const user = new User(email,userId,token, expirationDate);
      this.user.next(user);
  } 
}



