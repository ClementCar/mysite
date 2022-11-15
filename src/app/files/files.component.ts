import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: bock;'
  },
  animations: [
    flyInOut()
  ]
})
export class FilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
