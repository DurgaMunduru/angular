import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  myUsername="";
  myEmail="";
  myPassword="";
  myRole="";
  storeValues(username,email,password,role)
  {
    this.myUsername=username;
    this.myEmail=email;
    this.myPassword=password;
    this.myRole=role;
  }

}
