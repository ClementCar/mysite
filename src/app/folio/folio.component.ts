import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-folio',
  templateUrl: './folio.component.html',
  styleUrls: ['./folio.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: bock;'
  },
  animations: [
    flyInOut()
  ]
})
export class FolioComponent implements OnInit {

  projects!: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects()
    .subscribe((projects) => this.projects = projects)
  }

}
