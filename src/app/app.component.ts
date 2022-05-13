import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bankApp';
  login:boolean=false;
constructor(private router:Router, private appService:AppService){
  this.appService.sideMenuOption.subscribe((res:any)=>{
    this.login = res?.login;

  })
}
  public logout(){
    this.appService.loginActive(false);
    sessionStorage.removeItem('token')
this.router.navigate([''])
  }

}
