import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  animations: [
    flyInOut()
  ]
})
export class CvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
