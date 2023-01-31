import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  ImagePath: string;
  Image: string;
  
  constructor() {
    //image location
    this.ImagePath = '/assets/logo2.png',
    this.Image = '/assets/images/pre-wedding.png'
  }
  
  // faCoffee = faCoffee;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;

}
