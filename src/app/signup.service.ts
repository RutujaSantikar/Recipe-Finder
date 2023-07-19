import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  public signupUser(user:any):Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<any>(url,user);
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