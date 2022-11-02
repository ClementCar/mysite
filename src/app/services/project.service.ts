import { Injectable } from '@angular/core';
import { Project } from '../shared/project';
import { PROJECTS } from '../shared/porjects';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getAllProjects(): Observable<Project[]>{
    return of(PROJECTS);
  }

  getProject(id: string): Observable<Project> {
    return of(PROJECTS.filter((project) => (project.id === id))[0]);
  }

  getProjectIds(): Observable<string[] | any > {
    return of(PROJECTS.map(project => project.id));
  }
}
