import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myEmail="";
  myPassword="";
  myRole="";
  theValues(email,password,role)
  {
    this.myEmail=email;
    this.myPassword=password;
    this.myRole=role;
  }
}
