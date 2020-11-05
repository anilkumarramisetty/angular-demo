import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService]
})


export class LoginComponent implements OnInit {

  model: any = {};
  errorMessage: string;
  error=false;

  constructor(
    private loginService: LoginService,    
    private route: Router) { }

  ngOnInit(): void {
  }

  LoginSubmit(username: string, password: string) {
    debugger;
    this.model.UserName = username;
    this.model.Password = password;

    this.loginService.Login(this.model).subscribe(

      data => {
        debugger;
        if (data === "Success") {
          this.route.navigate(['/dashboard']);
        } else {
          this.error=true;
          this.errorMessage = "Invalid credentials";
        }
      });


  }



  // onSubmit(form:NgForm){
  //   console.log(form);


  // }

  onSubmit(data){
    debugger;
    console.log(data.uname);    
  }

}
