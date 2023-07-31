import { Component, OnInit } from '@angular/core';
import { FormControl,FormsModule,Validators,  FormGroupDirective,
  NgForm,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SignupService } from '../services/signup.service';  
import { SnackbarService } from '../services/snackbar.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginView = true
  isLoading = false;
  authObs: any;

  ngOnInit() {
   
  }
  constructor(private signupService: SignupService,
    private snackbarService: SnackbarService,
    private router: Router, private afAuth: AngularFireAuth) { }
  matcher = new MyErrorStateMatcher();

  userSignupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  toggleView() {
        this.loginView = !this.loginView;
  }
  
  onSubmit() {
     console.log(this.userSignupForm.value)
      const email = this.userSignupForm.value.email;
     const password = this.userSignupForm.value.password;
     console.log(email, password)
     this.isLoading= true
     if (email && password) {
       
         if (this.loginView) {
           this.authObs = this.signupService.login(email, password);
        
           
     }
     else {
           this.authObs=this.signupService.signup(email, password);
           
     }
     }
      
     this.userSignupForm.reset();

     
   }
  
  
  // signupUser() {
  //   console.log('hello');

  //   console.log(this.userSignupForm)
  //     const email = this.userSignupForm.value.email;
  //     const password = this.userSignupForm.value.password;
  //     const cpassword = this.userSignupForm.value.cpassword;
  
  //   if (email && password) {
    

  //     this.afAuth['createUserWithEmailAndPassword'](email, password).then((userCredential :any ) => {
  //       console.log(userCredential)
  //       this.snackbarService.successSnackBar('Signup successful')
    
  //       this.router.navigate(['/favorites'])
  //      }).catch((error:any) => {
  //         // Handle login error
  //        console.error('Signup error:', error.message);
  //       this.snackbarService.errorSnackBar('Signup failed: ' + error.message);
  //       });
  //   }
  // }


}
