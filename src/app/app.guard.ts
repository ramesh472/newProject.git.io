import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  loginStatus:boolean=false;
  constructor(private appService:AppService, private router:Router){
    this.appService.loginStatus.subscribe((res:any)=>{
      this.loginStatus = res
    })
  }

  token = sessionStorage.getItem('token')
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this.token){
console.log(route);
//    this.router.navigate([route?.routeConfig?.path])

     return true;

   }else {
     this.router.navigate([''])
    console.log(route);

    return false;
  }
  }

}
