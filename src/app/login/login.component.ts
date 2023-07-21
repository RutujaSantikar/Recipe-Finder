import { Component ,OnInit} from '@angular/core';
import { FormControl,FormsModule,Validators,  FormGroup,FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
  import {ErrorStateMatcher} from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit() {
    
  } 
  constructor(private afAuth:AngularFireAuth){}

  matcher = new MyErrorStateMatcher();
  
  loginUserForm = new FormGroup({
    email: new FormControl(''),
    password:new FormControl('')
  })
  
  
  loginUser()
  {
     console.log('hiiii')
    const email = this.loginUserForm.value.email; 
    const password = this.loginUserForm.value.password;
     console.log(email, password)

    if (email && password) {
       this.afAuth['signInWithEmailAndPassword'](email, password).then((userCredential:any) => {
         console.log(userCredential)
         
    }).catch((error:any) => {
          // Handle login error
        });
    }
   
  }

}
