import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "";
  password = "";
  errorMsg = "";

  login(){
    if(this.username.trim().length === 0){
      this.errorMsg = "Username is required";
    }

    if(this.password.trim().length === 0){
      this.errorMsg = "Password is required";
    }
  }
}
