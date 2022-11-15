import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: bock;'
  },
  animations: [
    flyInOut()
  ]
})
export class InterestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
