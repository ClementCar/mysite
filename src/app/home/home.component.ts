import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';
import { AnimService } from '../services/anim.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  isShown = false;

  constructor(private animService: AnimService) { }

  ngOnInit(): void {
    this.animService.delay()
    .subscribe(data => this.isShown = true)
  }

}
