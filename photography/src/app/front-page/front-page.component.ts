import { Component } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  ImagePath: string;
  
  constructor() {
    //image location
    this.ImagePath = '/assets/images/mehendi.png'
  }
}
