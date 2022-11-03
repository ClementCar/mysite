import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-folio',
  templateUrl: './folio.component.html',
  styleUrls: ['./folio.component.scss']
})
export class FolioComponent implements OnInit {

  projects!: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects()
    .then((projects) => this.projects = projects)
  }

}
