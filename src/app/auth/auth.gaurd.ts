import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"; // Only import the necessary operator from 'rxjs'
import { SignupService } from "../services/signup.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
 
    constructor(private signupService: SignupService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.signupService.user.pipe(
            map(user => {
                const isAuth = !!user;
                if (isAuth) {
                    return true;
                }
                return this.router.createUrlTree(['/auth']);
            }),
            // tap(isAuth => {
            // if (!isAuth) {
            //      this.router.navigate(['/auth'])
            //  }
            // })
        );
    }
}
