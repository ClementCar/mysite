import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';
import { flyInOut, expand } from '../animations/app.animation';
import { BreakpointService } from '../services/breakpoint.service';

@Component({
  selector: 'app-folio',
  templateUrl: './folio.component.html',
  styleUrls: ['./folio.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class FolioComponent implements OnInit {

  projects!: Project[];
  breakpoint!: number;

  constructor(private projectService: ProjectService,
    private breakpointService: BreakpointService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects()
    .subscribe((projects) => this.projects = projects);
    this.breakpoint = this.breakpointService.detailColspan();
  }

}
