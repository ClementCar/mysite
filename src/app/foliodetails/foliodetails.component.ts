import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';
import { BreakpointService } from '../services/breakpoint.service';
import { expand, visibility, flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-foliodetails',
  templateUrl: './foliodetails.component.html',
  styleUrls: ['./foliodetails.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: bock;'
  },
  animations: [
    expand(),
    visibility(),
    flyInOut()
  ]
})
export class FoliodetailsComponent implements OnInit {
  
  project!: Project;
  projectIds!: string[];
  prev!: string;
  next!: string;
  visibility = 'shown';
  breakpoint!: number;
  col!: number;

  constructor(private projectService: ProjectService,
    private breakpointService: BreakpointService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.projectService.getProjectIds().subscribe(projectIds => this.projectIds = projectIds);
    this.route.params.pipe(switchMap((params: Params) => {this.visibility = 'hidden'; return this.projectService.getProject(params['id']);}))
    .subscribe(project => { this.project = project; this.setPrevNext(project.id); this.visibility= 'shown'});
    this.breakpoint = this.breakpointService.detailBreakpoint();
    this.col = this.breakpointService.detailColspan();
  }

  changeSize(event: any) {
    this.breakpoint = this.breakpointService.detailBreakpoint();
    this.col = this.breakpointService.detailColspan();
  }

  setPrevNext(projectId: string) {
    const index = this.projectIds.indexOf(projectId);
    this.prev = this.projectIds[(this.projectIds.length + index - 1) % this.projectIds.length ];
    this.next = this.projectIds[(this.projectIds.length + index + 1) % this.projectIds.length ];
  };

  goBack() : void {
    this.location.back();
  };

}
