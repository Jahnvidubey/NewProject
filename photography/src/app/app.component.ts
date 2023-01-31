import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photography';
  ImageBack: string;
  constructor(){
    this.ImageBack='/assets/images/background.jpg'
  }
}
