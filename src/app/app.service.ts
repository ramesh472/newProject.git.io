import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

private sideMenu = new BehaviorSubject<any>({});
sideMenuOption = this.sideMenu.asObservable();

setHeader(options:any){
  this.sideMenu.next(options)
}

private login = new BehaviorSubject<boolean>(false);
loginStatus = this.login.asObservable();

loginActive(status:any){
this.login.next(status);
}

private url = "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
  constructor(private http:HttpClient) { }

public getBankList(){
  return this.http.get(this.url);
}

public user =[{
  username:'Beinex@user',
  password:'Beinex@971'
}]

}
