import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-foliodetails',
  templateUrl: './foliodetails.component.html',
  styleUrls: ['./foliodetails.component.scss']
})
export class FoliodetailsComponent implements OnInit {

  project!: Project;
  projectIds!: string[];

  constructor(private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.projectService.getProjectIds().subscribe(projectIds => this.projectIds = projectIds);
  }

}
