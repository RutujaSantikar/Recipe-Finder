import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient,private afAuth:AngularFireAuth, private snackbarService:SnackbarService,private router:Router) { }
  // public signupUser(user:any):Observable<any> {
  //   const url = 'https://reqres.in/api/users';
  //   return this.http.post<any>(url,user);
  // }
  
  signup(email: string, password: string) {
    
    this.afAuth['createUserWithEmailAndPassword'](email, password).then((userCredential: any) => {
      console.log(userCredential);
      this.snackbarService.successSnackBar('Signup Successful')
      this.router.navigate(['/favorites'])
    }).catch((error: any) => {
       this.snackbarService.errorSnackBar(error.message)
    })
  }
  login(email:string, password:string) {
    
    this.afAuth['signInWithEmailAndPassword'](email, password).then((userCredential: any) => {
      console.log(userCredential);
      this.snackbarService.successSnackBar('Login Successful');
      this.router.navigate(['/favorites'])
    })

   }
}



// const firebaseConfig = {
//   apiKey: "AIzaSyBTsW4s3M7RABzmt7wXH4TfcdB4pzmuGfU",
//   authDomain: "recipe-finder-c13e5.firebaseapp.com",
//   databaseURL: "https://recipe-finder-c13e5-default-rtdb.firebaseio.com",
//   projectId: "recipe-finder-c13e5",
//   storageBucket: "recipe-finder-c13e5.appspot.com",
//   messagingSenderId: "1040988384289",
//   appId: "1:1040988384289:web:8acf097862a35dbad78760"
// };