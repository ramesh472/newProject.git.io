import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm = new FormGroup({
     username: new FormControl(''),
     password: new FormControl('')
  })

  constructor(private appService:AppService, private router:Router) {
    let options={
      login:false
    }
    this.appService.setHeader(options)
   }

  ngOnInit(): void {
  }

login(){
let username = this.loginForm.controls['username'].value;
let password = this.loginForm.controls['password'].value;
if(username == this.appService.user[0].username && password == this.appService.user[0].password){

let value =Math.random().toString(36).replace(/[^a-z]+/g, '');
console.log(value);
sessionStorage.setItem('token',value);
  this.router.navigate(['dashboard'])
}
else{
  console.log('invalid username or password');
}

}

}
