import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';
import { AnimService } from '../services/anim.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class FilesComponent implements OnInit {

  isShown = false;

  constructor(private animService: AnimService) { }

  ngOnInit(): void {
    this.animService.delay()
    .subscribe(() => this.isShown = true )
  }

}
