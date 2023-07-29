import { Component, OnInit,OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { SignupService } from '../services/signup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  private userSub!: Subscription;
  isMobile: boolean = false;
  sideNavOpen: boolean = false;
  isOpen: boolean = false;
  isAuthenticated = false;

  constructor(private breakpointObserver: BreakpointObserver,private signupService:SignupService) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
    this.userSub = this.signupService.user.subscribe(user => {
      this.isAuthenticated = !!user
    });
  }
   
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogOut() {
    this.signupService.logOut();
  }
  toggleSideNav() {
    this.isOpen = !this.isOpen;
  }
}



