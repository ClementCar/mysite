import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
  animations: [
    flyInOut()
  ]
})
export class InterestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
