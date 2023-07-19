import { Component, OnInit } from '@angular/core';
import { FormControl,FormsModule,Validators,  FormGroupDirective,
  NgForm,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SignupService } from '../signup.service';  
import { SnackbarService } from '../snackbar.service';
import { Router } from '@angular/router';

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
  ngOnInit() {
   
  }
  constructor(private signupService:SignupService, private snackbarService:SnackbarService,private router: Router){}
  matcher = new MyErrorStateMatcher();

  userSignupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl('')
  })

  toggleView() {
        this.loginView = !this.loginView;
   }
  signupUser() {
    console.log('hello');
    this.signupService.signupUser(this.userSignupForm.value).subscribe((response: any) => {
      if (response) {
        this.snackbarService.successSnackBar('Signup successful')
        this.router.navigate(['/favorites'])
      }
      
      console.log(response);

    })
    
    
  }
}
